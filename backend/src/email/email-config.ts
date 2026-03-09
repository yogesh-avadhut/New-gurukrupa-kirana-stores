import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
   auth: {
    user: "dev.yogeshavadhut@gmail.com",
    pass: "miqf twgl nshs ixfd",
  },
});

export {transporter}