const CategorieController=require("../controllers/categories")
const express=require("express")
const method=express.Router()
method.get("/getAll",CategorieController.getAll)
method.post("/add",CategorieController.Add)
method.delete("/delete/:id",CategorieController.Delete)
method.put("/update/:id",CategorieController.Update)

module.exports=method