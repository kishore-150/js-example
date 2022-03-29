const express=require('express');
const app = express();
const axios = require('axios').default;

axios.get("http://localhost:3000/student").then (res =>{
    console.log(res.data);
});
app.listen(4000);


