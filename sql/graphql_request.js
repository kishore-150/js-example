const express = require('express');
const app = express();
const bodyparser=require('body-parser');
const { gql,GraphQLClient} = require('graphql-request');

app.use(bodyparser.json())

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
   const client= new GraphQLClient('https://dcore.fr8.in/v1/graphql',{
    method:'POST',
    headers:{'Content-type': 'application/json'},       
    body : JSON.stringify({
         query,
         variables
       }) 
   })
   
  const data = await client.request(query,variables) 

  res.json(data);
  }) 
app.listen(4000,() => 
    {console.log("server  is running")});

