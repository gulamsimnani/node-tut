const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callBack) {
            callBack(null, "uploads")
        },
        filename: function (req, file, callBack) {
            callBack(null, file.fieldname + "_" + Date.now() + ".jpg")
        }
    },
    )
}).single("user_file")
app.post('/upload',upload, (req, res) => {
    res.send("file uploaded");
});

app.listen(5000);