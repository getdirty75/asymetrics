
import React from "react";
import malong from '../img/about_mael.jpg'
import ben from '../img/about_ben.jpg'
import tai from '../img/about_adrien.jpg'

const BlurbPage = () => {

  return(
    <div className="container section centered">
      <div class="tile is-ancestor">
        <div class="tile is-12">
          <article class="tile is-child box">
            <p class="subtitle">The Asymetrics is a collective of friends from various horizons, sharing humble knowledge and stories about music, culture, or any other interesting, creative, and distinctive exploits from all around the World. We dig in these various subjects through articles, podcasts, mixtapes and more...</p>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div className='blurb_box'>
                  <div className="image">
                    <img alt="malong prevent_steal" className="blurb_img" src={malong} />
                  </div>
                  <p class="subtitle blurb_name">Malong</p>
                </div>

                <p className="blurb_desc">Globe-trotter, self-taught-out-of-a-backpack bedroom DJ, with an aggressive passion for percussion and bass-heavy music from every age and corner of the World.</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <div className='blurb_box'>
                  <div className="image">
                    <img alt="tai prevent_steal" className="blurb_img" src={tai} />
                  </div>
                  <p class="subtitle blurb_name">Lord Sandwich</p>
                </div>
                <p className="blurb_desc">Dionysian philosopher, hardcore vinyl crate-digger, music encyclopedia, and occasionally versatile singer.</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
              <div className='blurb_box'>
                <div className="image">
                  <img alt="ben prevent_steal" className="blurb_img" src={ben} />
                </div>
                <p class="subtitle blurb_name">Ben</p>
              </div>
                 <p className="blurb_desc">Musician and tech wizard, responsible for the stunningness of this website's modest endeavour, and overall coherence among chaotic inputs.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default BlurbPage
