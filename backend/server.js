const express =  require('express')
const cors =require('cors')
const dotenv = require('dotenv');
const bookRoute = require('./routes/booksRoute.js')

dotenv.config()
const app = express();
app.arguments(express.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, (req, res)=>{
    console.log(`server is running on local host ${PORT}`)
})





