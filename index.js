const jsxMail = require("jsx-mail");

jsxMail.render("Welcome", { paragraph: "paragraph paragraph paragraph" }).then((html) => {
  console.log(html);
});