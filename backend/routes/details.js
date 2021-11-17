const router=require('express').Router();
let Detail=require('../models/detail.model');

router.route('/').get((req,res)=>{
    Detail.find()
    .then(details=>res.json(details))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const username=req.body.username;
    const emailId=req.body.emailId;
    const contactno=Number(req.body.contactno);
    const address=req.body.address;

    const newDetail= new Detail({
        username,
        emailId,
        contactno,
        address
    });

    newDetail.save()
    .then(()=>res.json('Detail added'))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').get((req,res)=>{
    Detail.findById(req.params.id)
    .then(details=>res.json(details))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/:id').delete((req,res)=>{
    Detail.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Details deleted.'))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/update/:id').post((req,res)=>{
    Detail.findById(req.params.id)
    .then(details=>{
        details.username=req.body.username;
        details.emailId=req.body.emailId;
        details.contactno=Number(req.body.contactno);
        details.address=req.body.address;
        details.save()
        .then(()=>res.json('Detail updated!'))
        .catch(err=>res.status(400).json('Error: '+err));
    })
    .catch(err=>res.status(400).json('Error: '+err));
});

module.exports=router;
