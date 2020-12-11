
import fs from 'fs';
import MP3_GIFT from '../audio/Bun.mp3'

const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

exports.handler =  async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { email } = payload
  sgMail.setApiKey(SENDGRID_API_KEY)


//   function previewFile(files) {
//     const file = files[0];
//     const reader = new FileReader();
//     file.end = file.size;
//     reader.onload = function () {
//         alert(reader.result);
//     };
//     if (file) {
//         reader.readAsDataURL(file);
//     }
// }
  const msg = {
      from: "daAsymetrics@gmail.com",
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