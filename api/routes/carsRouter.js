const express = require('express')
const router = express.Router();
const db = require('../../data/dbConfig')

router.get('/',(req, res)=>{
    db('cars')
    .then(cars=>{
        res.status(200).json(cars)
    })
    .catch(err=>{
        res.status(500).json({message:'Server error',error:err.message})
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

// Update
router.put('/:id',(req, res) => {
    const {item} = req.body;
    db('cars')
    .update({item})
    .where('id',req.params.id)
    .then(success =>{
        if(!success){
            res.status(404).json({error:"Couldnt find Car Listing to update"})
        }
        else{
            res.status(200).json({message:"Successfully Updated Listing"})
        }
    })
    .catch(err => res.status(500).json({error:err}))
})
// Delete

router.delete('/:id',(req,res) =>{
    db('cars')
    .delete()
    .where('id',req.params.id)
    .then(success => {
        if(!success){
            res.status(404).json({error:"Couldnt find Car listing to delete"})
        }
        else{
            res.status(200).json({message:"Successfully deleted listing"})
        }
    })
})

module.exports = router;