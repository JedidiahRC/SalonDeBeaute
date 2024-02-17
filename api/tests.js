var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var app = Express();
app.use(cors());

var CONNECTION_STRING =
  "mongodb+srv://rabemiarintsoacjedidiah:654321Mongodb@cluster0.rso5g9w.mongodb.net/?retryWrites=true&w=majority";

var DATABASENAME = "todoappdb";
var database;

app.listen(5038, () => {
  Mongoclient.connect(CONNECTION_STRING, (error, client) => {
    if (error) {
      console.error("Error connecting to MongoDB:", error);
    } else {
      database = client.db(DATABASENAME);
      console.log("MongoDB Connection Successful");
    }
  });
});

app.get("/api/todoapp/getNotes", (request, response) => {
  database
    .collection("todoappcollection")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});

app.post("/api/todoapp/AddNotes", multer().none(), (request, response) => {
  database
    .collection("todoappcollection")
    .count({}, function (error, numOfDocs) {
      database.collection("todoappcollection").insertOne({
        id: numOfDocs.toString(),
        description: request.body.newNotes,
      });
      response.json("Added Successfully");
    });
});

app.delete("/api/todoapp/deleteNotes", (request, response) => {
  database.collection("todoappcollection").deleteOne({
    id: request.query.id,
  });
  response.json("Deleted Successfully");
});
