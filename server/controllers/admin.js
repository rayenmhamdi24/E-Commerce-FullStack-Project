module.exports={Admin}=require("../models/model")
module.exports={
    getAll:async(req,res)=>{
        try {
            const admins= await Admin.findAll()
            res.send(admins)
        } catch (error) {throw error
            
        }
       },
       Add:async(req,res)=>{
        const{name}=req.body
        try {
            const user = await Admin.create(name)
            res.send(user)
        } catch (error) {throw error
            
        }
       },
       Delete:async(req,res)=>{
        const{id}=req.param
        try {
            const user = await Admin.destroy({
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
            const user = await Admin.update({name:name},{
                where: {
                  id:id,
                },
              })
            res.send("updated")
        } catch (error) {throw error
            
        }
       }
}