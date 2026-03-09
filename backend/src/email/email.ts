import { Forgot_Password_OTP_Template, Verification_Email_Template, Welcome_Customer_Email_Template } from "../utility/email-templte.js";
import { transporter } from "./email-config.js";

const sendVerificationCode = async (email: any, verificationCode: any) => {
    try {
        const response = await transporter.sendMail({
            from: '"Yogi Soft 👨‍💻" <dev.yogeshavadhut@gmail.com>',
            to: email,
            subject: " verify your email",
            text: "verify your mail...", // Plain-text version of the message
            html: Verification_Email_Template.replace("{verificationCode}", verificationCode) // HTML version of the message  
        })
        console.log("email sent successfull....", response)
    }
    catch (err) {
        console.log("error in email fie send verificationEmail fn :", err)
    }
}


const sendForgotPasswordVerificationCode = async (email: any, verificationCode: any) => {
    try {
        const response = await transporter.sendMail({
            from: '"Yogi Soft 👨‍💻" <dev.yogeshavadhut@gmail.com>',
            to: email,
            subject: " verify your email",
            text: "verify your mail...", // Plain-text version of the message
            html: Forgot_Password_OTP_Template.replace("{otp}", verificationCode) // HTML version of the message  
        })
        console.log("email sent successfull....", response)
    }
    catch (err) {
        console.log("error in email fie send verificationEmail fn :", err)
    }
}



const sendWelcomeEmailToCustomer = async function (email: any,customerName:any) {
    try {
        const response = await transporter.sendMail({
            from: '"Yogi Soft 👨‍💻" <dev.yogeshavadhut@gmail.com>',
            to: email,
            subject: " verify your email",
            text: "verify your mail...", // Plain-text version of the message
            html: Welcome_Customer_Email_Template.replace("{name}",customerName) // HTML version of the message  
        })
        console.log("email sent successfull....", response)
    }
    catch (err) {
        console.log("error in email fie send verificationEmail fn :", err)
    }
}

export { sendVerificationCode, sendForgotPasswordVerificationCode, sendWelcomeEmailToCustomer }