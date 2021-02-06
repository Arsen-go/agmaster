require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const { sendMail, sendMailToUser } = require("./server/mail_controller/index");
const cons = require("consolidate");
const indexRouter = require("./server/indexRouter");
app.use("/", indexRouter);

app.use(bodyParser.json());

// app.use(express.static("public"));
app.use(express.static("html/images"));
   
app.use(express.static("html/assets/js"));
app.use(express.static("html/assets/css"));
app.use(express.static("html/assets/sass"));
app.use(express.static("html/assets/webfonts"));

app.use(express.static(path.join(__dirname, "node_modules")));
app.engine("html", cons.swig);
app.set("views", path.join(__dirname, "html"));
app.set("view engine", "html");
const port = process.env.PORT || 8080;
app.set('port', port)
app.listen(port, () => {
	console.log(`server listening port-> ${port}`);  
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"public"));
});

app.post("/message", (req, res) => {
	sendMail(req);
	sendMailToUser(req, res);
});
