const express = require("express")

const mysql = require('mysql')
const app = express()
const cors = require("cors")

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")



app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials: true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'anterest',
    database: "anterest",
})