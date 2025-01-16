module.exports={Categorie}=require("../models/model")
module.exports={
    getAll:async(req,res)=>{
        try {
            const categories= await Categorie.findAll()
            res.send(categories)
        } catch (error) {throw error
            
        }
       },
       Add:async(req,res)=>{
        const{name}=req.body
        try {
            const categorie = await Categorie.create(name)
            res.send(categorie)
        } catch (error) {throw error
            
        }
       },
       Delete:async(req,res)=>{
        const{id}=req.param
        try {
            const categorie = await Categorie.destroy({
                where: {
                  id:id,
                },
              })
            res.send("deleted")
        } catch (error) {throw error
            
        }
       },
       Update:async(req,res)=>{
        const{id}=req.param
        const{name}=req.body
        try {
            const categorie = await Categorie.update({name:name},{
                where: {
                  id:id,
                },
              })
            res.send("updated")
        } catch (error) {throw error
            
        }
       }
}