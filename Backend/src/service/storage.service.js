var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadFile(file){
    return new Promise((res, rej)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:'Hello-cohort'
        },(error, result)=>{
            if(error){
                rej(error);
            }else{
                res(result);
            }
        })
    })
}


module.exports = uploadFile;