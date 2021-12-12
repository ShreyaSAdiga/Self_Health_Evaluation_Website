const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const Schema=mongoose.Schema;
const detailSchema= new Schema({
    username:{type:String,required: true},
    password:{type:String,required: true},
    password_c:{type:String,required:true},
    emailId:{type:String,required:true},
    contactno:{type:Number,required:true},
    address:{type:String,required:true}
});


detailSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);        
        this.password_c=await bcrypt.hash(this.password_c,12);
    }
    next();
});

const Detail=mongoose.model('Detail',detailSchema);
module.exports=Detail;
