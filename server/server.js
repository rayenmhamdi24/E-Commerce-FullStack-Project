const express = require("express");
const connect=require("./models/model")
const routeAdmin=require("./routes/admin")
const routeCategorie=require("./routes/categorie")
const routePc=require("./routes/pc")

const cors=require("cors")
 
const App = express();
App.use("/honor",routeAdmin)
App.use("/honor",routeCategorie)
App.use("/honor",routePc)
const port = 5000;

App.use(
  cors())
App.use(express.json());
App.use(express.static(__dirname + "/../client/dist"))
App.use("/api/admin",routeAdmin)
App.use("/api/categorie",routeCategorie)
App.use("/api/pc",routePc)

App.listen(port, () => {
    console.log(`app listening on http://127.0.0.1:${port}`);
  })