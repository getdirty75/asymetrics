
import React from "react";
import malong from '../img/blurb_malong.jpg'
import ben from '../img/blurb_ben.jpg'
import tai from '../img/blurb_adrien.jpg'

const BlurbPage = () => {

  return(
    <div className="container section centered">
      <div class="tile is-ancestor">
        <div class="tile is-12">
          <article class="tile is-child box">
            <p class="subtitle">The Asymetrics is a collective of friends from various horizons, sharing humble knowledge and stories about music, culture, or any other interesting, creative, and distinctive exploits from all around the World. We dig in these various subjects through articles, podcasts, mixtapes and more... <br/>The 3 founders, although acquainted before, formally met a decade ago in Beijing, China, over a few too many glasses or <a href="https://baijiureview.com/red-star-erguotou/" target="_blank">ErGuTou</a>, and have since continued with adventures which include, hunting for a lost flute in the trunk of Beijing's 60,000+ cabs, drunkenly singing at a wedding in Thailand, getting kicked out of a Roman karaoke by the mafia...</p>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-vertical is-12">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="subtitle blurb_name">Malong</p>
                <div className="image">
                  <img className="blurb_img" src={malong} />
                </div>
                <p className="blurb_desc">Globe-trotter, self-taught-out-of-a-backpack bedroom DJ, with an aggressive passion for percussion and bass-heavy music from every age and corner of the World.</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="subtitle blurb_name">Lord Sandwich</p>
                <div className="image">
                  <img className="blurb_img" src={tai} />
                </div>
                <p className="blurb_desc">Dionysian philosopher, hardcore vinyl crate-digger, music encyclopedia, and occasionally versatile singer.</p>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                <p class="subtitle blurb_name">Ben</p>
                <div className="image">
                  <img className="blurb_img" src={ben} />
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
