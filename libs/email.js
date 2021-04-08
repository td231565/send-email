const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = function (to, name, photo) {
  const msg = {
    to,
    from: 'td231565@gmail.com',
    subject: '綁定 FB 後使用 SendGrid 寄信',
    // text: `Hello ${name}`,
    html: `
      <p>Hello ${name}</p>
      <img src="${photo}" />
    `,
  }
  sgMail
    .send(msg)
    .then(res => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.log(error.response.body.errors)
    })
}