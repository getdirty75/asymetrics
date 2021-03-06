
const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

exports.handler =  async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { email } = payload
  sgMail.setApiKey(SENDGRID_API_KEY)

  const msg = {
      from: "support@theasymetrics.com",
      to: email,
      template_id:"d-49441dac9d0d4cfb8a02c556649dc4c5",
      dynamicTemplateData: {
        name: "the Asymetrics",
        address01: "7th Sky Crescent.",
        address02: "Apt. 181",
        city:"Panama City Starr",
        state:"Panama",
        zip:"75018"
      },
  };

  try{
    await sgMail.send(msg);
    return { statusCode: 200, body: "Message sent" };
  }
  catch(error) {
      return { statusCode: error.code, body: error.message };
  }
};