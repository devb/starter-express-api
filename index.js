const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
});
app.get("/agora-token", (req, res) => {
    console.log("just got token request");
    res.send('token request!');
});
app.listen(process.env.PORT || 3000)
