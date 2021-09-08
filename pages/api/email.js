const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const handler = (req, res) => {
  if (req.method == "POST") {
    let data = JSON.parse(req.body);

    const msg = {
      to: email,
      from: "email@example.com",
      subject: "Example Email",
      text: `
    Dear user,    Here is your email.
  `,
      html: `
    <p>Dear user,</p>    <p>Here is your email.</p>
  `,
    };
    sgMail.send(msg);
    return res.status(200).send("success");
  }
};

export default handler;
