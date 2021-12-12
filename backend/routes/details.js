const router=require('express').Router();
let Detail=require('../models/detail.model');
const bcrypt=require('bcryptjs');

router.route('/').get((req,res)=>{
    Detail.find()
    .then(details=>res.json(details))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/add').post(async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const password_c=req.body.password_c;
    const emailId=req.body.emailId;
    const contactno=Number(req.body.contactno);
    const address=req.body.address;


    if(!username || !password || !password_c || !emailId || !contactno || !address){
        return res.status(400).json({error: "Please fill the field properly"});
    }

    if(password!=password_c ){
        return res.status(400).json({error: "Please fill the fields of password and confirm password properly"});
    }

    Detail.findOne({emailId:emailId})
    .then((userExist)=>{
        if(userExist){
            return res.status(400).json({error:"Email Id already exists"})
        }
    });
    const newDetail= new Detail({
        username,
        password,
        password_c,
        emailId,
        contactno,
        address
    });
    
    await newDetail.save()
    .then(()=>res.json('Detail added'))
    .catch(err=>res.status(400).json('Error: '+err));
});

router.route('/signin').post(async(req,res)=>{
    try{
        const { emailId,password }=req.body;
        if(!emailId || !password){
            return res.status(400).json({error:"Please fill the data"})
        }
        const userLogin=await Detail.findOne({emailId:emailId});
       //alert(userLogin);
        if(userLogin)
        {
            const isMatch=await bcrypt.compare(password, userLogin.password);
            if(!isMatch){
                res.status(400).json({error:"Invalid credentials "});
            }else{
                res.json({message: "user Sigin successful"})
            }
        }else{
            res.status(400).json({error:"Invalid credentials"});
        }
    }catch(err){
        console.log(err);
    }
});

module.exports=router;
