
import React from 'react'
import LetTheSnaresBun from '../img/LetTheSnaresBun.jpg'

export default class ChristmasPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      buttonDisabled: true,
      message: { fromEmail: "" },
      submitting: false,
      error: null,
    }
  }

  onChange = event => {
    const name = event.target.getAttribute("name")
    console.log(name)
    console.log(event.target.value)
    this.setState({
      message: { ...this.state.message, [name]: event.target.value },
    })
  }

  submitForm = async (event) => {
    event.preventDefault();
    console.log(event.target)
    console.log(event.target.fromEmail.value)
    console.log(event.target.fromEmail)

    try{
      const response = await fetch("/.netlify/functions/christmas", {
        method: "POST",
        body: JSON.stringify({
          body: 'Hi ! Thanks for downloading Taiwan Mc & Davojah x Omni Trio & Foul Play - Let The Snares Bun (Skwig Mashup). Enjoy :)',
          email: event.target.fromEmail.value,
          subject: 'The Asymetrics Free DL',
        }),
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
      <>
        <div className="container content">
          <div className="tile is-12">
            <article className="tile is-child box">
              <div className="christmas_songName">
                    <h3 className="christmas_tai">Taiwan Mc</h3>
                    <h3>&nbsp; & &nbsp;</h3>
                    <h3 className="christmas_davojah">Davojah x Omni Trio</h3>
                    <h3>&nbsp; & &nbsp;</h3>
                    <h3 className="christmas_foul">Foul Play</h3>
                    <h3>&nbsp; -- &nbsp;</h3>
                    <h3>Let The Snares Bun (Skwig Mashup)</h3>
                  </div>
            </article>
          </div>
        </div>


        <div className="container content">
          <div className="tile is-ancestor">

            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="tile is-child box">
                  <img className="christmas_img" src={LetTheSnaresBun} />
                  </article>
                </div>
              </div>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">

                    <h1>Free Download</h1>
                    <p>Enter your e-mail & get the track !</p>

                    <div>{this.state.error}</div>
                    <form onSubmit={this.submitForm}>
                      <input
                        className="input is-rounded"
                        id="fromEmail"
                        name="fromEmail"
                        placeholder="Your Email for mp3"
                        type="email"
                        value={this.state.message.fromEmail}
                        onChange={this.onChange}
                      />
                      <button
                        className="button is-black"
                        type="submit"
                        disabled={this.state.submitting}
                      >Download MP3</button>
                    </form>
{/* 
                    <form onSubmit={this.submitForm}>
                      <input className="input is-rounded" type="email" placeholder="Your Email for WAV" />
                      <button className="button is-black" type="submit">Download WAV</button>
                    </form> */}

                </div>
              </article>
            </div>

          </div>
        </div>
      </>
    )
  }
}
