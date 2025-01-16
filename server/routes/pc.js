const PcController=require("../controllers/pc")
const express=require ('express')
const method=express.Router()
const cors=require('cors')

method.get("/getall",PcController.getAll)
method.post("/add",PcController.Add)
method.delete("/delete/:id",PcController.Delete)
method.put("/update/:id",PcController.Update)


module.exports=method