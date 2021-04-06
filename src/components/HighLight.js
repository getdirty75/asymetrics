import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import { CATEGORIES } from '../translation/enum'
import { useRecursiveTimeout } from "./useRecursiveTimeout";

import { useEmblaCarousel } from 'embla-carousel/react'

const HighLight = (props) => {
  const { data } = props
  const { edges: posts } = data.allMarkdownRemark

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel();
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: ""
  });
  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );
  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);


  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, 10000);


  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);


  return (
    <>
      <div className="embla embla--thumb">
        <div className="embla__viewport" ref={thumbViewportRef}>
          <div className="embla__container embla__container--thumb">
            {posts && posts.map(({ node: post }, index) => (
              <Thumb
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                imgSrc={post.frontmatter.featuredimage && post.frontmatter.featuredimage.childImageSharp.fluid.src}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="embla">
        <div className="embla__viewport" ref={mainViewportRef}>
          <div className="embla__container">
            {posts && posts.map( ({ node: post }, index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <div className="embla__sub">
                    <Link to={`/blog/${post.fields.slug}`}>
                      <p className="embla__itemTitle">{post.frontmatter.title}</p>
                    </Link>
                    <p className="embla__teaser">{post.frontmatter.teaser}</p>
                    <div className="embla__tagsBox">
                      <Link className="blogRoll__categories" to={`/blog/categories/${post.frontmatter.categories}`}>
                        {CATEGORIES.some((cat) => cat.value === post.frontmatter.categories)
                          ? CATEGORIES.filter((cat) => cat.value === post.frontmatter.categories)[0].label
                          : post.frontmatter.categories
                        }
                      </Link>
                    </div>
                    <div>
                      {post.frontmatter.tags?.map((item) =>
                        <Link className="tag is-dark embla__tag" key={item} to={`/blog/tags/${item.replace(/_| |&/g,'-').replace('#', '').toLowerCase()}`}>
                          {item}
                        </Link>
                      )}
                    </div>
                    <p className="embla__author">{post.frontmatter.author} - {post.frontmatter.date}</p>
                  </div>
                  <img
                    className="embla__slide__img prevent_steal"
                    src={post.frontmatter.featuredimage && post.frontmatter.featuredimage.childImageSharp.fluid.src}
                    alt={post.frontmatter.featuredimage && post.frontmatter.featuredimage.childImageSharp.fluid.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

HighLight.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query HighLightQuery {
        allMarkdownRemark(
          filter: { frontmatter: { author: { eq: "Malong" } } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                author
                categories
                tags
                teaser
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <HighLight data={data} count={count} />}
  />
)

const Thumb = ({ selected, onClick, imgSrc }) => (
  <div className={`embla__slide embla__slide--thumb ${selected ? "is-selected" : ""}`}>
    <button
      onClick={onClick}
      className="embla__slide__inner embla__slide__inner--thumb"
      type="button"
    >
      <img className="embla__slide__thumbnail prevent_steal" src={imgSrc} alt={imgSrc} />
    </button>
  </div>
);
