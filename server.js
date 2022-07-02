const express = require("express");
const app = express();


app.get('/', (req, res) => {
    res.send("Hello");
})


app.listen(process.env.APP_PORT, () => console.log('Server up'))
