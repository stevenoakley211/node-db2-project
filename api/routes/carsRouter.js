const express = require('express')
const router = express.Router();
const db = require('../../data/dbConfig')

router.get('/',(req, res)=>{
    db('cars')
    .then(cars=>{
        res.status(200).json(cars)
    })
    .catch(()=>{
        res.status(500).json({error:'Server error'})
    })
})

router.post('/',(req,res)=>{
    db('cars')
    .insert(req.body,'id')
    .then(id => {
        
        res.status(201).json({id : id, newAccount:req.body});
      })
  
  .catch(() => {
    res.status(500).json({ message: 'Could not add that car' });
  })
})

module.exports = router;