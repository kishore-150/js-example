const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyparser=require('body-parser');
const { gql } = require('graphql-request')

app.use(bodyparser.json())

  async function city(){
    app.get('/city',async(req,res) => {
    const query = gql`
    query city($search: String) {
    city(where: {_and: [{name: {_ilike: $search}}, {is_connected_city: {_eq: true}}]}) {
    id
    name
    is_connected_city
    }
  }`
const variables = {
    search: `${req.query.name}%`
}
    const response = await fetch('https://dcore.fr8.in/v1/graphql',{
    method: 'POST',
    headers:{'Content-type': 'application/json'},       
         body : JSON.stringify({
             query:query,
             variables:variables
            }) 
})
  const data = await response.json(response) 

  res.json(data);
}) 
app.listen(4000,() => 
    {console.log("server  is running")});
}  
  city()
   
