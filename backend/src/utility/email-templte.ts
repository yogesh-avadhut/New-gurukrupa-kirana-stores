export const Verification_Email_Template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your Email</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 8px;
              box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
              overflow: hidden;
              border: 1px solid #ddd;
          }
          .header {
              background-color: #4CAF50;
              color: white;
              padding: 20px;
              text-align: center;
              font-size: 26px;
              font-weight: bold;
          }
          .content {
              padding: 25px;
              color: #333;
              line-height: 1.8;
          }
          .verification-code {
              display: block;
              margin: 20px 0;
              font-size: 22px;
              color: #4CAF50;
              background: #e8f5e9;
              border: 1px dashed #4CAF50;
              padding: 10px;
              text-align: center;
              border-radius: 5px;
              font-weight: bold;
              letter-spacing: 2px;
          }
          .footer {
              background-color: #f4f4f4;
              padding: 15px;
              text-align: center;
              color: #777;
              font-size: 12px;
              border-top: 1px solid #ddd;
          }
          p {
              margin: 0 0 15px;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">Verify Your Email</div>
          <div class="content">
              <p>Hello,</p>
              <p>Thank you for signing up! Please confirm your email address by entering the code below:</p>
              <span class="verification-code">{verificationCode}</span>
              <p>If you did not create an account, no further action is required. If you have any questions, feel free to contact our support team.</p>
          </div>
          <div class="footer">
              <p>&copy; ${new Date().getFullYear()} Yogi Soft 👨‍💻. All rights reserved.</p>
          </div>
      </div>
  </body>
  </html>
`;


export const Forgot_Password_OTP_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password OTP</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f4f8;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border: 1px solid #ddd;
            overflow: hidden;
        }
        .header {
            background: linear-gradient(90deg, #FF6F61, #FF8C42);
            color: white;
            text-align: center;
            padding: 25px;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            padding: 30px;
            color: #333;
            line-height: 1.8;
            text-align: center;
        }
        .otp-box {
            display: inline-block;
            margin: 25px 0;
            font-size: 26px;
            color: #FF6F61;
            background: #fff0f0;
            border: 2px dashed #FF6F61;
            padding: 15px 25px;
            border-radius: 8px;
            font-weight: bold;
            letter-spacing: 3px;
        }
        .footer {
            background-color: #f0f4f8;
            padding: 20px;
            text-align: center;
            font-size: 13px;
            color: #777;
            border-top: 1px solid #ddd;
        }
        p {
            margin: 0 0 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">Forgot Password OTP</div>
        <div class="content">
            <p>Hello,</p>
            <p>We received a request to reset your password. Use the OTP below to proceed:</p>
            <div class="otp-box">{otp}</div>
            <p>If you did not request this, please ignore this email. Your account is safe.</p>
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} Yogi Soft 👨‍💻. All rights reserved.
        </div>
    </div>
</body>
</html>
`;

export const Welcome_Customer_Email_Template = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to Gurukrupa Kirana</title>

<style>
body{
    font-family: Arial, Helvetica, sans-serif;
    margin:0;
    padding:0;
    background:#f5f6fa;
}

.container{
    max-width:600px;
    margin:30px auto;
    background:#ffffff;
    border-radius:10px;
    overflow:hidden;
    box-shadow:0 6px 20px rgba(0,0,0,0.08);
}

.header{
    background:linear-gradient(135deg,#0f9b0f,#38ef7d);
    color:white;
    text-align:center;
    padding:30px 20px;
    font-size:26px;
    font-weight:bold;
}

.content{
    padding:30px;
    line-height:1.7;
    color:#444;
}

.content h2{
    margin-top:0;
    color:#222;
}

.quote{
    background:#f0fff4;
    border-left:5px solid #38a169;
    padding:15px;
    margin:20px 0;
    font-style:italic;
    color:#2f855a;
}

.features{
    margin:20px 0;
}

.features li{
    margin-bottom:8px;
}

.button{
    display:inline-block;
    padding:12px 26px;
    background:#0f9b0f;
    color:white;
    text-decoration:none;
    border-radius:6px;
    font-weight:bold;
    margin-top:15px;
}

.footer{
    text-align:center;
    padding:20px;
    font-size:12px;
    background:#fafafa;
    color:#777;
    border-top:1px solid #eee;
}

.shop{
    font-weight:bold;
    color:#0f9b0f;
}
</style>

</head>

<body>

<div class="container">

<div class="header">
New Gurukrupa Kirana Stores
</div>

<div class="content">

<h2>Hello {name} 👋</h2>

<p>
Welcome to <span class="shop">New Gurukrupa Kirana Stores, Barshi</span>!  
We are very happy to have you as part of our customer family.
</p>

<p>
Our goal is simple — to provide <b>quality groceries, honest pricing, and friendly service</b> to every customer.
</p>

<div class="quote">
“Trust is built one transaction at a time, and every customer is part of our family.”
</div>

<p>As our valued customer you can enjoy:</p>

<ul class="features">
<li>Fresh and quality grocery products</li>
<li>Transparent and fair pricing</li>
<li>Quick billing and easy service</li>
<li>Friendly support whenever you visit</li>
</ul>

<p>
Thank you for choosing us. We truly appreciate your trust and look forward to serving you again.
</p>

<a class="button">Visit Us Anytime</a>

</div>

<div class="footer">
<p>© ${new Date().getFullYear()} New Gurukrupa Kirana Stores, Barshi</p>
<p>Developed with ❤️ by Yogi Soft 👨‍💻</p>
</div>

</div>

</body>
</html>
`;