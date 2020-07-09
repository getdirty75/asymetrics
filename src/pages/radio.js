import React from "react";
import Layout from '../components/Layout';
import back from '../img/blurb_malong.jpg';

const RadioPage = () => {

  return(
    <Layout>
      <div className="container">
        <div class="tile is-ancestor section">
          <div class="tile is-vertical is-8">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/822429919&color=%230b5c66&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                </iframe>
              </article>
            </div>
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child box">
                  <p className="title about__sectionTitle">!Wide</p>
                </article>
                <article class="tile is-child box">
                  <figure class="image is-4by3">
                    <img src={back} />
                  </figure>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p className="title about__sectionTitle">!Vertical</p>
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p className="title about__sectionTitle">!Inside</p>
            </article>
          </div>
        </div>
      </div>
    </Layout>
)

}

export default RadioPage