console.log("Web serverni boshlash");
const express = require("express");

const app = express();




//MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");


// 1 Kirish code
app.use(express.static("public")); // Middleware DP > public ochiqladi
app.use(express.json());           // Middleware DP > support Rest API
app.use(express.urlencoded({ extended: true})); // Middleware DP > support Traditional API

// 2 Session code
// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routers code 
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    console.log("Step2 => Backendga kirish");

    console.log(req.body);

    const new_reja = req.body.reja;
    console.log("Step3 => Backenddan Databasega so'rov")
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
      console.log("Step4 => Databasedan Backendga response");
      console.log("Step5 => Backenddan Frontendga json formatdagi javob");
      console.log(data.ops);
      res.json(data.ops[0]);
    }); 
});

// DELETE QISMI
app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  
  db.collection("plans").deleteOne(
    { _id:new mongodb.ObjectId(id) }, 
    function (err, data) {
      res.json({ state: "success" });
    }
  );
});

// EDIT QISMI
app.post("/edit-item", (req, res) => {
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate(
    {_id: new mongodb.ObjectId(data.id)}, 
    {$set: {reja: data.new_input}}, 
    function(err, data) {
      res.json({ state: "success" });
    }
  );
  
});

// DELETE ALL QISMI
app.post("/delete-all", (req, res) => {
  if(req.body.delete_all) {
    db.collection("plans").deleteMany(function () {
      res.json({ state: "hamma rejalar o'chirildi" });
    });
  }
});


/* app.get('/author', (req, res) => {
     res.render("author", {user:user});
 });  */

app.get("/", function (req, res) {
    console.log("user entered /");
    console.log("STEP2: FRONTENDDAN BACKENDGA KIRISH");

    console.log("STEP3: BACKENDDAN DATABASEGA SO'ROV JO'NATISH");
    db.collection("plans").find().toArray((err, data) => {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } 
        else {
            console.log("STEP4: DATABESEDAN BACKENDGA QAYTISH");
            console.log("db:", data);

            console.log("STEP5: BACKENDDAN FRONTENDGA RESPONSE");
            res.render("reja", { items: data });
        }
    });
    
});

module.exports = app;

