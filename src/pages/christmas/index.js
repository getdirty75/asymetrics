
import React from 'react'

export default class Christmas extends React.Component {

  handleSubmit = () => {
    fetch("/.netlify/functions/hello")
      .then(response => response.json())
      .then(console.log)
  };
  submitForm = async (event) => {
    event.preventDefault();

    try{
      const response = await fetch("/.netlify/functions/christmas", {
        method: "POST",
        body: JSON.stringify({email: 'benoit.raynaud95@gmail.com', subject: 'download for free'}),
      });
      if (!response.ok) {
        console.log('not 200 response');
        console.log(response);
        return;
      }
      console.log('All Ok');
      console.log(response);

    } catch(error){
      console.log('error');
      console.log(error)
    }
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Hi people</h1>
            <p>
              Want a gift ?
            </p>
            <h2>How to ?</h2>
            <h3>give your email adress</h3>

            <h3>click</h3>
            <button
              className="button is-black"
              onClick={this.submitForm}
            >
              here
            </button>
          </div>
        </div>
      </section>
    )
  }
}
