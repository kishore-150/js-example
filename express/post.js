const express=require('express');
const a= express();
a.post('/hello',(req,res) => {
  res.status(200).json('Hello '+req.query.name);
});
a.listen(3000);