const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

module.exports = function (to) {
  const msg = {
    to,
    from: 'td231565@gmail.com',
    subject: '測試 SendGrid 寄信功能',
    text: `這是一封從 ${process.env.PORT ? 'localhost' : 'Heroku'} 寄出的測試信`,
    html: `<strong>這是一封從 localhost 寄出的測試信，收件人是 ${to}</strong>`,
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