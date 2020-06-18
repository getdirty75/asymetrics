import React from "react";
import Layout from '../components/Layout';

const ShopPage = () => {

  return(
    <Layout>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">One</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Two</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Three</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Four</p>
            <p class="subtitle">Subtitle</p>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-vertical is-9">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Five</p>
                <p class="subtitle">Subtitle</p>
                <div class="content">
                </div>
              </article>
            </div>
            <div class="tile is-8 is-vertical">
              <div class="tile">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Six</p>
                    <p class="subtitle">Subtitle</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">Seven</p>
                    <p class="subtitle">Subtitle</p>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">Eight</p>
                  <p class="subtitle">Subtitle</p>
                </article>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="tile is-8 is-parent">
              <article class="tile is-child box">
                <p class="title">Nine</p>
                <p class="subtitle">Subtitle</p>
                <div class="content">
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="title">Ten</p>
                <p class="subtitle">Subtitle</p>
                <div class="content">
                </div>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="content">
              <p class="title">Eleven</p>
              <p class="subtitle">Subtitle</p>
              <div class="content">
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Twelve</p>
            <p class="subtitle">Subtitle</p>
            <div class="content">
            </div>
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child box">
            <p class="title">Thirteen</p>
            <p class="subtitle">Subtitle</p>
            <div class="content">
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Fourteen</p>
            <p class="subtitle">Subtitle</p>
            <div class="content">
            </div>
          </article>
        </div>
      </div>

    </Layout>
  )

}

export default ShopPage