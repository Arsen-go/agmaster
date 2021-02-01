require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { sendMail, sendMailToUser } = require("./mail_controller");
const cons = require("consolidate");

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.static("public/images"));
   
app.use(express.static("public/assets/js"));
app.use(express.static("public/assets/css"));
app.use(express.static("public/assets/sass"));
app.use(express.static("public/assets/webfonts"));

app.use(express.static(path.join(__dirname, "node_modules")));
app.engine("html", cons.swig);
app.set("views" , path.join(__dirname,"..", "public"));
app.set("view engine", "html");

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log("server listening port-> 3000");  
});

app.get("/", (req, res) => {
	res.redirect("/index.html");//(path.join(__dirname, "..", "index.html")); 
});

app.post("/message", (req, res) => {
	sendMail(req);
	sendMailToUser(req, res);
});
