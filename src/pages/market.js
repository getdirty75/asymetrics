
import React from "react";
import { Link } from 'gatsby'

const MarketPage = () => {

  const productList = [
    {
      link: 'https://www.blurb.com/b/10591799-isometric-magazine',
      img: '/img/asymetrics_market1.jpg',
      title: 'Isometric Magazine',
      teaser: 'A photographic love letter to Detroit. Illuminating the creative forces behind one of the most resilient cities in the world.',
      creator: 'Optimal Collective',
    },
    {
      link: 'https://brocrecordz.bandcamp.com/album/maze-of-sounds',
      img: '/img/theasymetrics_maze_of_sound_small.jpg',
      title: 'Maze Of Sounds',
      teaser: 'By Janko Nilovic & The Soul Surfers',
      creator: 'Broc Recordz',
    },
    {
      link: 'https://www.beijingsilvermine.com/store/print-fengli-champagne',
      img: '/img/asymetrics_market2.jpg',
      title: 'Fengli - Champagne !',
      teaser: 'Champagne ! Chengdu, China, 2017. 20 x 30 cm, Fujicolor. Crystal Archive Paper. Edition of 60 dated, signed and numbered.',
      creator: 'Beijing Silvermine',
    },
  ];

  return (
    <div>
      <div className="blogRoll
        columns
        is-multiline
        is-three-quarters-mobile
        is-two-thirds-tablet
        is-half-desktop
        is-one-third-widescreen
        is-one-quarter-fullhd"
      >

      {productList.map((item, index) => (
        <div className="is-parent column is-4 blogRoll__item" key={index}>
          <article>
            <a href={item.link} target='_blank'>
              <div className="image is-5by4">
                <img className="market__img"
                  alt={item.title}
                  src={item.img}
                />
              </div>
            </a>
            <div className="market__sub">
              <a href={item.link} target='_blank'>
                <p className="blogRoll__itemTitle">{item.title}</p>
                <p className="blogRoll__teaser">{item.teaser}</p>
              </a>

              <div className="blogRoll__tagsBox">
                {/* <Link className="blogRoll__categories" to={`/blog/categories/${post.frontmatter.categories}`}>
                  {CATEGORIES.some((cat) => cat.value === post.frontmatter.categories)
                    ? CATEGORIES.filter((cat) => cat.value === post.frontmatter.categories)[0].label
                    : post.frontmatter.categories
                  }
                </Link> */}
              </div>
              <a href={item.link} target='_blank'>
                <p className="blogRoll__categories">{item.creator}</p>
              </a>
            </div>
          </article>
        </div>
      ))}
      </div>
    </div>
  )
}

export default MarketPage