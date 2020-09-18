const express = require('express');
const mongoose = require('mongoose')

const UploadRouter = require('./routes/uploadsRoutes');

mongoose.connect('mongodb://localhost/uploads',{
    useNewUrlParser :true,
    useUnifiedTopology :true
})

const app = express();
app.use(express.json());
app.use(UploadRouter);

app.listen(3000,()=>{
    console.log('Server Is Running at Port 3000');
})