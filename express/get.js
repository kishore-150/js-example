const express=require('express');
const a= express();
a.get('/hello',(req,res) => {
  res.send('Hello FR8');
});
a.listen(3000);
