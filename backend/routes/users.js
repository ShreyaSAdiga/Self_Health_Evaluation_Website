const router=require('express').Router();
let User=require('../models/user.model');

router.route('/').get((req,res)=>{
    User.find()
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const newUser=new User({username});

    newUser.save()
    .then(()=>res.json('User added'))
    .catch(err=>res.status(400).json('Error: '+err));
});
/*
router.route('/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(users=>res.json(users))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    User.findByIdAndDelete(req.params.id)
    .then(users=>res.json('User deleted.'))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/update/:id').get((req,res)=>{
    User.findById(req.params.id)
    .then(users=>{
        users.username=req.body.username;
        users.save()
        .then(()=>res.json('User updated!'))
        .catch(err=>res.status(400).json('Error: '+err));
    })
    .catch(err=>res.status(400).json('Error: '+err));
});
*/
module.exports=router;