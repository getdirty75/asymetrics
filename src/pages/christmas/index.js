
import React from 'react'

export default class Christmas extends React.Component {

  handleSubmit = () => {
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(console.log)
  };
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Hi people</h1>
            <p>
              Want a gift ?
            </p>
            <h2>How to</h2>
            <h3>give your email adress</h3>

            <h3>click</h3>
            <button
              className="button is-black"
              onClick={this.handleSubmit}
            >
              here
            </button>
          </div>
        </div>
      </section>
    )
  }
}
