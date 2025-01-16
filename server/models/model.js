const { Sequelize,DataTypes } = require('sequelize')
const conn = new Sequelize('PC-Shop', 'root', 'root', {
    host: 'localhost',
    dialect:"mysql"
  });
   conn.authenticate()
   .then(()=>console.log('Connection has been established successfully.'))
   .catch ((error)=>console.error('Unable to connect to the database:', error))
   const Admin=require("./admin")(conn, DataTypes)
   const Categorie =require("./categories")(conn, DataTypes)
   const Pc =require("./pc")(conn, DataTypes)
   Admin.hasMany(Pc)
   Pc.belongsTo(Admin)
   Categorie.hasMany(Pc)
   Pc.belongsTo(Categorie)
  //  conn.sync({ alter: true });
  //  console.log('All models were synchronized successfully.')
  module.exports={Admin,Categorie,Pc}
  