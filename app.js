const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));
//app.set("puerto", process.env.PORT || 3000);

//RUTAS//
app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor Corriendo Correctamente")
});


//app.listen(app.get("puerto"), () => {
//    console.log("Servidor Corriendo Correctamente en el Puerto " + app.get("puerto"))
//});


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get("/register", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
});

app.get("/login", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});