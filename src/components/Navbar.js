import React from 'react'
import { Link } from 'gatsby'
import insta from '../img/social/instagram.svg'
import soundcloud from '../img/social/soundcloud.svg'
import spotify from '../img/social/spotify.svg'
import fb from '../img/social/facebook.svg'
import tube from '../img/social/youtube.svg'
import { RoughNotation } from "react-rough-notation"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    this.setState({ active: !this.state.active },
      () => {
        this.state.active
          ? this.setState({ navBarActiveClass: 'is-active' })
          : this.setState({ navBarActiveClass: '' })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand is-flex-touch">
            <Link to="/" className="navbar-item is-flex-touch" title="Logo">
              <div className="container">
                <RoughNotation
                  animationDelay={5000}
                  animationDuration={1500}
                  color="linen"
                  type="highlight"
                  show={true}
                >
                  <h1 className='navBar__title'>Asymetrics&nbsp;</h1>
                </RoughNotation>
                <p className="home__desc">Always odd never aligned...</p>
              </div>
            </Link>

            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="navigation"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered"></div>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item navbar__itemStyle" to="/blog/categories/news">news</Link>
              <Link className="navbar-item navbar__itemStyle" to="/market">market</Link>
              <Link className="navbar-item navbar__itemStyle" to="/blog/categories/mixtapes">mixtapes</Link>
              <Link className="navbar-item navbar__itemStyle" to="/blog/categories/photography">visuals</Link>
            <a
                className="navbar-item"
                href="https://soundcloud.com/the-asymetrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={soundcloud} alt="Soundcloud" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.instagram.com/asymetrics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={insta} alt="Instagram" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="http://www.facebook.com/asymetrics/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={fb} alt="Facebook" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://www.youtube.com/channel/UCjm0hKdlJVNA5X3U3KEhEow/playlists?view_as=subscriber"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={tube} alt="YouTube" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://open.spotify.com/user/l4j7h7m54m3042w0l1yifk031"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={spotify} alt="Spotify" />
                </span>
              </a>
              {/* <Link className="navbar-item navbar__itemStyle" to="/blurb">x</Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
