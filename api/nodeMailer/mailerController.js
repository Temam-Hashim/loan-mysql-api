import nodemailer from "nodemailer";

export const NodeMailer = async (req, res) => {
  try {
    // let testAccount = await nodemailer.createTestAccount();
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
      html: req.body.message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.status(250).json(info);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
