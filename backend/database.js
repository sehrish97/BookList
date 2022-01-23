const mongoose = require('mongoose');

function dbconnect(){
    await mongoose.connect(process.env.MONGO_URL, ()=>
    console.log('mongodb is connected'))
}
module.exports = mongoose;