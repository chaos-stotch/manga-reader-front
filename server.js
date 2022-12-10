const express = require("express")

const { resolve } = require('path')

const app = express()

app.use('/', 
    express.static(
        resolve(
            __dirname,
            './build'
        )
    ))
app.get("*", (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/')) // we're on local windows
    url = url.substring(1);
    res.sendFile(url);
});

app.listen(process.env.PORT || 3000, (err) => {
    if (err) {return console.log(err)}
    console.log("OK OK!")
})