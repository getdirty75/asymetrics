import React from 'react'
import { Link } from 'gatsby'

import github from '../img/github-icon.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        {/* <div className="content has-text-centered">
          <p>Made with 💫 by the asymetrics 2020 and beyond</p>
          <p>Sky isn't the limit</p>
        </div> */}
        <div className="content has-text-centered">
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                <Link to="/" className="navbar-item is-flex-touch" title="Logo">
                  <div className="container">
                    <h1 className='footer__title'>Asymetrics <p className="footer__subtitle">!Topics</p></h1>
                    <p className="footer__mojo">ALWAYS ODD NEVER ALIGNED</p>
                  </div>
                </Link>
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="footer-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-item" to="/contact/examples">
                        Form Examples
                      </Link>
                    </li>
                    <li>
                      <a
                        className="footer-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="footer-item" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="footer-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  className="footer-item"
                  href="https://github.com/getdirty75/asymetrics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <img src={github} alt="Github" style={{ width: '1em', height: '1em' }}/>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
