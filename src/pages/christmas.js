
import React from 'react'
// import LetTheSnaresBun from '../img/LetTheSnaresBun.jpg'

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
    try{
      const response = await fetch("/.netlify/functions/christmas", {
        method: "POST",
        body: JSON.stringify({ email: event.target.fromEmail.value }),
      });
      if (!response.ok) {
        alert( 'not 200 response' + response );
        return;
      }
      alert( 'Thanks for downloading. Check your mail inbox' + response);

    } catch(error){
      alert( 'Error somewhere' + error);
    }
  }
  render() {
    return (
      <>
        <div className="container content">
          <div className="tile is-12">
            <article className="tile is-child box christmas_title">
              <div className="christmas_songName">
                    <h3 className="christmas_tai">Taiwan Mc</h3>
                    <h3>&nbsp; & &nbsp;</h3>
                    <h3 className="christmas_tai">Davojah x Omni Trio</h3>
                    <h3>&nbsp; & &nbsp;</h3>
                    <h3 className="christmas_tai">Foul Play</h3>
                  </div>
                  <h3 className="christmas_davojah">Let The Snares Bun (Skwig Mashup)</h3>
            </article>
          </div>
        </div>


        <div className="container content">
          <div className="tile is-ancestor">

            <div className="tile is-vertical is-8">
              <div className="tile">
                <div className="tile is-parent is-vertical">
                  <article className="christmas_cloud tile is-child box">
                  <iframe width="100%" height="166" scrolling="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/945169297&color=%23551a8b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
                  </iframe>
                  </article>
                </div>
              </div>
            </div>

            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content christmas_free">

                    <h1>Free Download</h1>
                    <p>Enter your e-mail & get the track !</p>

                    <div>{this.state.error}</div>
                    <form onSubmit={this.submitForm} className="christmas_form">
                      <input
                        className="input is-rounded christmas_input"
                        id="fromEmail"
                        name="fromEmail"
                        placeholder="Your Email"
                        type="email"
                        value={this.state.message.fromEmail}
                        onChange={this.onChange}
                      />
                      <button
                        className="button is-black christmas_button"
                        type="submit"
                        disabled={this.state.submitting}
                      >Grab your copy</button>
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
