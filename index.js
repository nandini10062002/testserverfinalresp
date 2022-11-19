import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import path from "path"
import sort from "../testserver/routes/sort.js";

const app = express()
dotenv.config()

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.use("/sort",sort)


const port = process.env.PORT||5000

app.listen(port, ()=>{
    console.log(`Server Started successfully ${port}`)
})