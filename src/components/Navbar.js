import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import insta from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import { SquareMotion } from './squareMotion'

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
          {/* <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link> */}
            <div className='squareMotion'>
              <SquareMotion >boxMotion</SquareMotion>
            </div>
            <Link to="/" className="navbar-item is-flex-touch" title="Logo">
              <h1 className='navBar__title'>Asymetrics <p className="navBar__subtitle">Topics</p></h1>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
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
            <Link className="navbar-item navbar__itemStyle" to="/tags/">All Categories</Link>
            <Link className="navbar-item navbar__itemStyle" to="/tags/knowledge-wisdom-rhythm">Knowledge / Wisdom / Rhythm</Link>
            <Link className="navbar-item navbar__itemStyle" to="/tags/mixtapes-playlists-podcasts">Mixtapes / Playlists / Podcasts</Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/getdirty75/asymetrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://github.com/getdirty75/asymetrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={insta} alt="Instagram" />
                </span>
              </a>
              <a
                className="navbar-item"
                href="https://github.com/getdirty75/asymetrics"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={twitter} alt="Twitter" />
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
