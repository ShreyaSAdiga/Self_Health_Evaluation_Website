const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const detailSchema= new Schema({
    username:{type:String,required: true},
    emailId:{type:String,required:true},
    contactno:{type:Number,required:true},
    address:{type:String,required:true}
},
{
    timestamps: true,
});

const Detail=mongoose.model('Detail',detailSchema);
module.exports=Detail;
