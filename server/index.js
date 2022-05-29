const express = require("express")

const mysql = require('mysql')
const app = express()
const cors = require("cors")

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const bcrypt=require('bcrypt')

const saltRounds=10


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
db.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
})

app.post('/register', (req,res)=>{

    const Nume = req.body.nume
    const Prenume = req.body.prenume
    const Password = req.body.password
    const Email = req.body.email



    bcrypt.hash(Password,saltRounds,(err, hash) =>{
        if (err){
            console.log(err)
        }
        db.query(
            "INSERT INTO register (nume, prenume, email,password) VALUES (?,?,?,?)", [Nume,Prenume,Email,hash],
            (err, result)=>{
                console.log(err)
            }
        )
    })

})
app.listen(3001, ()=> {
    console.log("server running");
})