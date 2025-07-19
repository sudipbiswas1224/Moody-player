require('dotenv').config()
const app = require('./src/app');
const connnectToDB = require('./src/db/db');


connnectToDB();


app.listen(3000,()=>{
    console.log('Server is listening to the 3000 port')
})