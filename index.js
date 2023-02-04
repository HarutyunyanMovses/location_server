//  lib
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http").createServer(app)
module.exports = http
// routers
const loc = require("./models/location")

const PORT =process.env.PORT || "3030";

app.use(cors({
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
  maxHttpBufferSize: 1e8
}));
app.use(express.json({ limit: "30mb", extended: true }));

 app.post("/",async (req,res)=>{
  try {
    console.log(req.body);
    const newLoc = new loc({
      location: req.body.location,
    });
      await newLoc.save();
    res.send(true)
  } catch (e) {
    res.send(false)
  }
})

async function startAPP() {
  try {
    mongoose
      .connect("mongodb+srv://admin:admin@cluster0.xgwn7ch.mongodb.net/?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => console.log("DB is conected... "))
      .catch(() => console.log("DB is not conected see your Node"));

    app.listen(PORT, () => {
      console.log(`Express is started on ${PORT} PORT... `);
    });
  } catch (e) {
    console.log(e);
  }
}

startAPP();
