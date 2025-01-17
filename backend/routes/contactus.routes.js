const validate = require("../middlewares/validate.middleware");
const { contactUsSchema } = require("../utils/schemas");

const router = require("express").Router();
const nodemailer = require("nodemailer");

const {
  SMTP_HOST: host,
  SMTP_PORT: port,
  SMTP_USER: user,
  SMTP_PASS: pass,
} = process.env;

// const sendEmail = async ({ to, subject, text, html }) => {
//   const transporter = nodemailer.createTransport({
//     host,
//     port,
//     secure: false,
//     auth: {
//       user,
//       pass,
//     },
//   });

//   const mailOptions = {
//     to,
//     subject,
//     text,
//     html,
//   };

//   return transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return console.error(error)
//     }
//     console.log("Message sent: %s", info.messageId)
//   });
// };

const sendEmail = async ({ to, subject, text, html }) => {
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: false,
    auth: {
      user,
      pass,
    },
  });

  const mailOptions = {
    from: user, // Include the from field
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
  });
};

router.post("/", validate(contactUsSchema), async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log(req.body);

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const resp = await sendEmail({
      to: email,
      subject: "Thank you for contacting Kaimono",
      text: `Hi ${name},\n\nThank you for reaching out! We have received your message:\n"${message}"\n\nOur team will get back to you soon.\n\nBest regards,\nKaimono Team`,
      html: `
                <h3>Hi ${name},</h3>
                <p>Thank you for reaching out! We have received your message:</p>
                <blockquote>${message}</blockquote>
                <p>Our team will get back to you soon.</p>
                <p>Best regards,<br/>Kaimono Team</p>
            `,
    });

    console.log(resp);

    res.status(200).json({
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
