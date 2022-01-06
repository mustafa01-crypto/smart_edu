const nodemailer = require("nodemailer");

exports.aboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};
exports.indexPage = (req, res) => {
  console.log(req.session.userID);
  res.status(200).render("index", {
    page_name: "index",
  });
};

exports.registerPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};
exports.loginPage = (req, res) => {
  res.status(200).render("login", {
    page_name: "login",
  });
};
exports.contactPage = (req, res) => {
  res.status(200).render("contact", {
    page_name: "contact",
  });
};
exports.sendMessage = async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "hasansabbah284@gmail.com", // generated ethereal user
      pass: "iwrgeyyqwbhqlvox", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <hasansabbah284@gmail.com>', // sender address
    to: "hasansabbah284@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  req.flash("Succes", "We received your email");
  res.status(200).redirect("/contact");
};
