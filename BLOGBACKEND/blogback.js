//import statements
const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routesblog/user");
const adminRoutes = require("./routesblog/admin");
const mongoose = require("mongoose");
const HttpError = require("./utilitiesblog/http-error");

const app = express();


//configuration statements
const port = 3001;
app.use(bodyParser.json());

//routing
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);


app.use((req, res, next) => {
    const error = new HttpError("page not found", 404);
    throw error;
  });
  
  app.use((error, req, res, next) => {
    res.status(error.code);
    res.json({
      message: error.message || "unknown error occured",
      code: error.code,
    });
  });


  mongoose
  .connect(
    "mongodb+srv://sandalysingh538:fuz931I2v2IH9nj4@mernstackcluster.riivm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    app.listen(port, () => {
      console.log("App is running ");
    });
  })
  .catch((err) => {
    console.log(err);
  });
