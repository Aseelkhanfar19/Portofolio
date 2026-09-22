import pg from 'pg';
import dotenv from "dotenv";


//To use Pool instead of pg.Pool
const {Pool}=pg;


/*
load and store values in proccess , this is CommonJS
   require -> load 
   config -> read the .env and load the variables to process.env
*/ 
dotenv.config();

console.log(process.env.DB_USER);

const pool = new Pool(
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        user:process.env.DB_USER,
        database:process.env.DB_NAME,
        password:process.env.DB_PASSWORD

    }
);

pool.query("SELECT NOW()")
.then(result =>{
    console.log("Connection created succefully !");
    console.log(result.row);
})
.catch(error =>{
    console.log("Connection failed");
    console.log(error.message);
})
