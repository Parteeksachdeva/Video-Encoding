const express = require('express')

const fs = require('fs')

const { exec } = require('child_process')

const path = require('path')

const multer = require('multer')

const bodyParser = require('body-parser')

const app = express()

const fileUpload = require('express-fileupload');

var dir = 'public';
var subDirectory = 'public/uploads'

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);

    fs.mkdirSync(subDirectory)

}

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})



var upload = multer({storage:storage})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(express.static('public'))

const PORT = process.env.PORT || 5000

app.get('/',(req,res) => {
    res.sendFile(__dirname +'/client/public/index.html')
})

app.post('/upload',upload.single('file'),(req,res,next) => {
    if(req.file){
        console.log(req.file.path)

        var output = Date.now() + "output.mp4"

        exec(`ffmpeg -i ${req.file.path} ${output}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            else{
                console.log("file is converted",output)
            res.download(output,(err) => {
                if(err) console.log(err)
                fs.unlinkSync(req.file.path)
                //fs.unlinkSync(output)
                res.status(201)
                next()

            })
        }
        })
    }
})

app.post('/uploadImage', upload.single('file'),(req, res) => {
    console.log(req.file.path)
    res.status(201)
    next()
});

app.listen(PORT,() => {
    console.log(`App is listening on Port ${PORT}`)
})