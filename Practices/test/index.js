const express = require("express");
const app = express();
const screenshot = require("screenshot-desktop");
let cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    // console.log(req);
    screenshot({
            filename: "shot.png"
        })
        .then((img) => {
            // img: Buffer filled with jpg goodness
            // ...
            // console.log("Screenshot succeeded", img);
            res.send(img);
        })
        .catch((err) => {
            // console.log("Screenshot failed", error);
            // ...
        });


});

app.listen(3000, () => console.log("listening on port 3000"));