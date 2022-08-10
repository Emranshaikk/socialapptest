const express = require('express')
const format = require ('date-format')
const app = express()

const PORT = 4000 || process.env.PORT

app.get("/", (req, res) => {
    res.status(200).send ("<h1>Hello from Shaik Imran Dev</h1>");
});


app.get("/api/v1/instagrams", (req, res) => {
    const instaSocial = {
        username: "Imranshaikk",
        followers: 900,
        follows: 1500,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
    res.status(200).json({instaSocial});
});

app.get("/api/v1/facebooks", (req, res) => {
    const facebookSocial = {
        username: "shaikkimran",
        followers: 1000,
        follows: 1500,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
    res.status(200).json({facebookSocial});
});

app.get("/api/v1/linkedin", (req, res) => {
    const linkedinSocial = {
        username: "imranshaikkdev",
        followers: 1500,
        follows: 3000,
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
    res.status(200).json({linkedinSocial});
});

app.get("/api/v1/gmail", (req, res) =>{
    const gmail = {
        username: "imran22shaik",
        date: format.asString("dd[MM] - hh:mm:ss", new Date()),
    };
    res.status(200).json({gmail});
});

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({param:req.params.token});
});


app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});

// htpps:// lco.dev/token?price=23
// parameters
