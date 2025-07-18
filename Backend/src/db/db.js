const mongoose = require('mongoose')


function connnectToDB(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('Connected to DB');
    })
    .catch((err)=>{
        console.log('Failed to connect to database',err);
    })
}

module.exports = connnectToDB;