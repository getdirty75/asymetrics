import React from 'react'
import { Link } from 'gatsby'
import insta from '../img/social/instagram.svg'
import soundcloud from '../img/social/soundcloud.svg'
// import logo from '../img/logo.png'
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
              {/* <div><img className="blurb_img logoed" src={logo} /></div> */}
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
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
            {/*<Link className="navbar-item navbar__itemStyle" to="/magazine/">categories</Link>

              <Link className="navbar-item navbar__itemStyle" to="/news">news</Link>
              <Link className="navbar-item navbar__itemStyle" to="/mixtapes">mixtapes</Link>
              <Link className="navbar-item navbar__itemStyle" to="/knowledge">knowledge</Link>
              <Link className="navbar-item navbar__itemStyle" to="/artworks">artworks</Link>
              <Link className="navbar-item navbar__itemStyle" to="/stories">stories</Link>
              <Link className="navbar-item navbar__itemStyle" to="/reports">reports</Link>

              <Link className="navbar-item navbar__itemStyle" to="/radio">radio</Link>
              <Link className="navbar-item navbar__itemStyle" to="/shop/">shop</Link>
              <Link className="navbar-item navbar__itemStyle" to="/contact/">contact</Link>

              <Link className="navbar-item navbar__itemStyle" to="/restricted/">restricted</Link>
              <Link className="navbar-item navbar__itemStyle" to="/error/">error</Link>
              <Link className="navbar-item navbar__itemStyle" to="/band/">band</Link> */}
            </div>
            <div className="navbar-end has-text-centered">
            {/* <Link className="navbar-item navbar__itemStyle" to="/radio">Radio</Link> */}
            <Link className="navbar-item navbar__itemStyle" to="/blurb">About</Link>
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
                href="https://soundcloud.com/the-asymetrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={soundcloud} alt="Soundcloud" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
