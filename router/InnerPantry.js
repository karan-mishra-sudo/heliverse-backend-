import express from "express"
const InnerPantry=express.Router();

export default InnerPantry.post('/',(req,res)=>{
  console.log("login InnerPantry");
  console.log(req.body);
  res.send({
    status:"ok"
  });
})
