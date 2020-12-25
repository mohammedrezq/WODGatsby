// const nodemailer = require("nodemailer");
// const sgTransport = require("nodemailer-sendgrid-transport");


// var options = {
//   auth: {
//     api_key: `${process.env.SENDGRID_API}`,
//   },
// };

// const mailer = nodemailer.createTransport(sgTransport(options));

// const email = {
//   to: ["mohammedrezq2000@gmail.com"],
//   from: "dasdasdas@dsadasdasdas.com",
//   subject: "Hi there",
//   text: "Awesome sauce",
//   html: "<b>Awesome sauce</b>",
// };

// exports.handler = async (event, context) => {
//   const info = await mailer.sendMail(email)
//   console.log(info);
//   return  {
//       statusCode: 200, body: info
//   }
// };
