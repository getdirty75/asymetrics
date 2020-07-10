import React from "react";
// import { motion } from "framer-motion"
// import { shuffle } from "lodash"
import Layout from '../components/Layout'
import malong from '../img/blurb_malong.jpg'
import ben from '../img/blurb_ben.jpg'
import tai from '../img/blurb_adrien.jpg'

// const initialColors = [
//   {code: "#8332dc99", text: "Malong", img: 'url("../public/img/malong.jpg")'},
//   {code: "#0b5c6699", text:"Lord Sandwich", img: 'url("../public/img/lord.jpg")'},
//   // {code:"#9C1AFF", text:"Judith Cooper"},
//   {code: "#3273dc99", text: "Ed Lessdaze", img: 'url("../public/img/asymetric.jpg")'},
//   // {code: '#000', text: "Endless Daze"},
//   // {code: "#ffa", text: "aligned"}
// ];
// const spring = {
//   type: "spring",
//   damping: 40,
//   stiffness: 100
// };


const BlurbPage = () => {
  // const [colors, setColors] = useState(initialColors);
  // useEffect(() => {
  //   setTimeout(() => setColors(shuffle(colors)), 3000);
  // }, [colors]);

  return(
    <Layout>
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
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="subtitle">The 3 founders, although acquainted before, formally met a decade ago in Beijing, China, over a few too many glasses or <a href="https://baijiureview.com/red-star-erguotou/" target="_blank">ErGuTou</a>, and have since continued with adventures which include: <br/><br/> * hunting for a lost flute in the trunk of Beijing's 60,000+ cabs<br/> * drunkenly singing at a wedding in Thailand<br/> * getting kicked out of a Roman karaoke by the mafia...</p>
            </article>
          </div>
        </div>
      </div>
  </div>

    {/* <div class="tile is-ancestor section">
      <div class="tile is-parent">
        <article class="tile is-child box"></article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box"></article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box"></article>
      </div>
    </div> */}

  </Layout>
    // <Layout>
    //   <div className="container">
    //   <div className="section">

    //   <div className="tile is-ancestor">
    //     <div className="tile is-4 is-vertical is-parent">
    //       <div className="tile is-child box">
    //         <p className="title about__sectionTitle"></p>
    //         <p className="about__sectionText">The Asymetrics is a collective of friends from various horizons, sharing humble knowledge and stories about music, culture, or any other interesting, creative, and distinctive exploits from all around the World. We dig in these various subjects through articles, podcasts, mixtapes and more...</p>
    //       </div>
    //       <div className="tile is-child box">
    //         <p className="title about__sectionTitle"></p>
    //         <p className="about__sectionText">These three founders, although acquainted before, formally met a decade ago in Beijing, China, over a few too many glasses or ErGuTou, and have since continued with adventures which include hunting for a lost flute in the trunk of Beijing's 60,000+ cabs, drunkenly singing at a wedding in Thailand, and getting kicked out of a Roman karaoke by the mafia...</p>
    //       </div>
    //     </div>
    //     <div className="tile is-parent">
    //         <div className="tile is-child box columns is-mobile">
    //           <ul className="animated__box">
    //             {colors.map((item) => (
    //                 <motion.li
    //                   className="animated__item"
    //                   key={item.code}
    //                   layoutTransition={spring}
    //                //   style={{backgroundImage: item.img}}
    //                 >
    //                   <h3 className="animated__itemText">{item.text}</h3>
    //                 </motion.li>
    //             ))}
    //           </ul>

    //         </div>
    //       </div>
    //   </div>
    //   </div>
    //   </div>
    // </Layout>
  )
}

export default BlurbPage
