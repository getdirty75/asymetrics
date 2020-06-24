import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffle } from "lodash";
import Layout from '../components/Layout'

const initialColors = [
  {code: "#8332dc99", text: "Malong", img: 'url("../public/img/malong.jpg")'},
  {code: "#0b5c6699", text:"Lord Sandwich", img: 'url("../public/img/lord.jpg")'},
  // {code:"#9C1AFF", text:"Judith Cooper"},
  {code: "#3273dc99", text: "Ed Less Daze", img: 'url("../public/img/asymetric.jpg")'},
  // {code: '#000', text: "Endless Daze"},
  // {code: "#ffa", text: "aligned"}
];
const spring = {
  type: "spring",
  damping: 40,
  stiffness: 100
};


const BlurbPage = () => {
  const [colors, setColors] = useState(initialColors);
  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 3000);
  }, [colors]);

  return(
    <Layout>
      <div className="container">
      <div className="section">

      <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title about__sectionTitle">!Always</p>
            <p className="about__sectionText">The Asymetrics is a worldwide collective sharing knowledge, wisdom & culture…We dig into different subjects through articles, playlists, videos, podcasts, mixtapes and more...</p>
          </div>
          <div className="tile is-child box">
            <p className="title about__sectionTitle">!Never</p>
            <p className="about__sectionText">The Asymetrics is a collective of friends from various horizons, sharing humble knowledge and stories about music, culture, or any other interesting, creative, and distinctive exploits from all around the World. We dig in these various subjects through articles, podcasts, mixtapes or any other formats that beguile us!</p>
          </div>
        </div>
        <div className="tile is-parent">
            <div className="tile is-child box columns is-mobile">
              <ul className="animated__box">
                {colors.map((item) => (
                    <motion.li
                      className="animated__item"
                      key={item.code}
                      layoutTransition={spring}
                   //   style={{backgroundImage: item.img}}
                    >
                      <h3 className="animated__itemText">{item.text}</h3>
                    </motion.li>
                ))}
              </ul>

            </div>
          </div>
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default BlurbPage
