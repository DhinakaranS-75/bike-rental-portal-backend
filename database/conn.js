const mongoose = require("mongoose");


const DB = "mongodb+srv://dhinakaran75493:dhinakaran75493@bikebook75.2haia60.mongodb.net/bikebook?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Mongodb Conneted successfull");
  })
  .catch((err) => {
    console.error("Mongodb Not Conneted");
  });


  