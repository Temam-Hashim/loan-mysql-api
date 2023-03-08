import nodemailer from "nodemailer";

export const NodeMailer = async (req, res, next) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: false,
      auth: {
        user: "coopbank2023@gmail.com",
        pass: "gekrppestpuppdmt",
      },
    });
    var mailOptions = {
      from: req.body.from,
      to: req.body.to,
      subject: req.body.subject,
      html:
        `<html>` +
        `<body">` +
        `<h3 style='color:blue;align-text:center'>Welcome to Cooperative Bank of Oromia </h3><hr/><br/>` +
        `<img src='cid:unique@logo.png' style="width:100%; margin-top:22px;height:80px;object-fit:cover"/><br/><br/>` +
        `<div style="font-size:14px;
                     font-family: Calibri, Futura;
                     width: 100%;
                     color: white;
                     background-color: #0099FF;
                     padding:10px;
                     line-height:28px;
                        ">
        <h4>Dear Sir/Madam,<br/></h4>
        ${req.body.message} 
        </div>` +
        `<br/><br/><footer style='margin-top:30px;color:orange'><span>Please do not replay to this email as it is system generated ! <br/> For more information about our bank please visit our website <a href='https://coopbankoromia.com.et/'>https://coopbankoromia.com.et/</a></span></footer>` +
        `<object type="image/svg+xml" data="image.svg">
              <img src="cid:unique@Pattern.svg" role="img" />
          </object>` +
        `</body></html>`,
      attachments: [
        {
          filename: "cooplogo.png",
          path: "./images/cooplogo.png",
          cid: "unique@logo.png",
        },
        {
          filename: "Pattern.svg",
          path: "./images/Pattern.svg",
          cid: "unique@Pattern.svg",
        },
      ],
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).json({
          success: 0,
          message: "Failed to send Email due to internal error",
          code: 500,
          error: err,
        });
      } else {
        res
          .status(200)
          .json({ success: 1, message: "Email Sent", details: info });
      }
    });
  } catch (err) {
    console.log({ message: "Email not sent", error: err });
  }
};
