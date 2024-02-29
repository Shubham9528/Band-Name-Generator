import express from "express";
import generateName from "sillyname"
const app = express();
const port=3000;
var sillyName="Welcome to the Band Generator";
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs", {
        
    })
})

app.post("/submit",(req,res)=>{
    sillyName = generateName();
    res.render("index.ejs", {
        name: sillyName,
    })
})
app.listen(port,()=>{
    console.log(`Listening at http://localhost:${port}`);
})