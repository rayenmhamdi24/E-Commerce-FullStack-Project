const AdminController=require("../controllers/admin")
const express=require("express")
const method=express.Router()
method.get("/getAll",AdminController.getAll)
method.post("/add",AdminController.Add)
method.delete("/delete/:id",AdminController.Delete)
method.put("/update/:id",AdminController.Update)

module.exports=method