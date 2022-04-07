const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyparser=require('body-parser');
const { gql } = require('graphql-request')

app.use(bodyparser.json())

  async function city(){
    app.get('/city',async(req,res) => {
const query = gql `
     query city  {
     city  {
     id
     name
     is_connected_city
  }
}`
    const response = await fetch('https://dcore.fr8.in/v1/graphql',{
    method: 'POST',
    headers:{'Content-type': 'application/json'},       
         body : JSON.stringify({
             query:query
            }) 
})
  const data = await response.json(response) 
  res.json(data);
}) 
app.listen(4000,() => 
    {console.log("server  is running")});
}  
  city()
   
