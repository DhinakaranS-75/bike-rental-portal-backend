const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require('cors');
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

require('./database/conn');
app.use(require('./router/auth'));
app.use("/uploads",express.static('uploads'));

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})