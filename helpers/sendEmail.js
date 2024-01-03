const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "go_nodejs@meta.ua",
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

// const email = {
//   to: "kalim_v@meta.ua",
//   from: "go_nodejs@meta.ua",
//   subject: "Test email",
//   html: "<p>Test email from localhost:3000</p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));

const sendEmail = async (data) => {
  const email = { ...data, from: "go_nodejs@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
