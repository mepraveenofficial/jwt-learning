require("./src/utils/dbconnector.js")

const cookieParser = require('cookie-parser');
const express = require("express");
const app = express();
app.use(express.json());
const morgan = require('morgan')
const helmet = require("helmet")


app.use(cookieParser());
app.use(helmet()) 
app.use(morgan("combined"))


// require('dotenv').config({path: "./.env"})
// console.log(process.env.DB_tokenScrete)

app.use("/", require("./src/routes"));



app.listen(5001);