 const express=require("express")
 const router=express.Router();
 const addUser=require("../controller/user-controller")
 router.post("/add",addUser)
 //export default router;
 module.exports=router;