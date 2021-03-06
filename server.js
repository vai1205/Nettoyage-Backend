const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

//app
const app = express();

//routes 
const formRoutes = require("./routes/form")

//middleWares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// routes middleware
app.use("/api",formRoutes)

app.get("/api/mail", (req,res)=>{
  res.redirect("https://sso.godaddy.com/?realm=pass&app=ox");
})

//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
