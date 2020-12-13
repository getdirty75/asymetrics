
import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <Formik
      initialValues={{ email: '' }}
      validate={ (values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await fetch("/.netlify/functions/christmas", {
            method: "POST",
            body: JSON.stringify({ email: values.email }),
          });
          if (!response.ok) {
            alert( 'A security has blocked the request. Change your browser');
            return;
          }
          alert( 'Thanks for downloading. Check your mail inbox');

        } catch(error) {
          alert( 'An Error occured');
        }
        setSubmitting(false);
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid }) =>
        <form onSubmit={handleSubmit}>
          <p className="christmas_error">{errors.email && touched.email && errors.email}</p>
          <input
            className="input is-rounded christmas_input"
            name="email"
            placeholder="Your Email"
            type="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <button
            className="button is-black christmas_button"
            type="submit"
            disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)}
          >
            Grab your copy
          </button>
        </form>
      }
    </Formik>
  </div>
);

const DownloadPage = () => (
  <>
    <div className="container content">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child box christmas_title">
                <div>
                  <h3 className="christmas_tai">Taiwan Mc &nbsp;</h3>
                  <h3 className="christmas_tai">Davojah x Omni Trio &nbsp;</h3>
                  <h3 className="christmas_tai">Foul Play &nbsp;</h3>
                </div>
                <h3 className="christmas_davojah">Let The Snares Bun (Skwig Mashup)</h3>
              </article>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <div className="content christmas_free">
              <h1>Free Download</h1>
              <p>Enter your e-mail & get the track !</p>
                <Basic />
            </div>
          </article>
        </div>
      </div>
    </div>
    <div className="container content">
      <div className="tile is-12">
        <article className="christmas_cloud tile is-child box">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/945169297&color=%23551a8b&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          />
        </article>
      </div>
    </div>
  </>
)

export default DownloadPage;
