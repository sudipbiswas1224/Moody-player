//here in the production we use a separate folder and file for the apis 
const express = require('express')
const multer = require('multer'); // when we send the data in the raw then we user express.json() but for the 'form-data' we use 'multer'
const uploadFile = require('../service/storage.service');

const router = express.Router();
const upload = multer({storage:multer.memoryStorage()}) // here upload is a middleware which will handle the file uploaded through form-data


router.post('/songs',upload.single('audio'), async (req, res)=>{
    // console.log(req.body);
    // console.log(req.file);

    const fileData = await uploadFile(req.file);
    console.log(fileData);
    res.json({
        message:"song created succesfully",
        song:req.body
    })
})

/* 
here we have to use 
title 
artist 
audioFile -> as we have to share the 'audio file' we can't use the raw format req.body 
file is shared in the form data

--we use raw format (for normal data , json format)
-- we use form-data (when we have to send data other than json format like file )--> uses more resource for both client side and server side
*/
//this is similar to app.post method 
router.post('/songs',(req, res)=>{

})




module.exports = router;