const sgMail = require('@sendgrid/mail')
const { SENDGRID_API_KEY } = process.env

exports.handler =  async (event, context, callback) => {

    const payload = JSON.parse(event.body)
    const { email, subject } = payload

    sgMail.setApiKey(SENDGRID_API_KEY)

    const body = Object.keys(payload).map((k) => {
        return `${k}: ${payload[k]}`
    }).join("<br><br>");

    const msg = {
        from: 'benoit.raynaud95@gmail.com',
        to: email,
        subject: subject ? subject : 'default subject',
        html: body,
    };

    try{
        await sgMail.send(msg)

        return {
            statusCode: 200,
            body: "Message sent"
        }
    } catch(e){
        return {
            statusCode: e.code,
            body: e.message
        }
    }
};