const { Router } = require('express');
const express = require('express');
const books = require('../data.js');
const router = express.Router();

router.get('/',(req,res)=>{
    res.json(books).status(200);
});

router.get('/:id', (req,res)=>{
    const {id} =req.params;
    console.log(id);
try{
    const singleBk = books.filter(item=> item.id==id)
    res.json(singleBk).status(200);

}
catch(e){
    console.log(`server is running at ${e}`)
}

});
// router.post('/', (req,res)=>{
//     res.send(`add books list`)
//})