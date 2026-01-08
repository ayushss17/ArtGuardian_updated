import  express, { Router }  from "express";
import connection from "./Database/DB.js";
import dotenv from 'dotenv';
import cors from 'cors';
import router from "./router/router.js";
import bodyParser from "body-parser";
const app=express();

dotenv.config();

const user= process.env.DB_USERNAME;
const pass=process.env.DB_PASSWORD;

app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)


const port = 6969;

connection(user,pass);

app.listen(port,()=>{console.log(`Server ON on port ${port}`)})
