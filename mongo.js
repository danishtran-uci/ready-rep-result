require('dotenv').config();
const mongoose=require("mongoose")

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString).then(()=>{
  console.log("mongodb connected");
}).catch(()=>{
  console.log('failed');
})

const newSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  workout:{
    type:Array,
    required:false
  }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection