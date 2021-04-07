const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = function (targetEmail) {
  const msg = {
    to: targetEmail,
    from: 'td231565@gmail.com',
    subject: 'Congrate to sign up!',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.log(error.response.body.errors)
    })
}