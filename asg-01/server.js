const express = require('express');
const server = express();
const port=3000
const cors=require('cors');
const CORS_OPTIONS={origin:"https://localhost:4200",}
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(cors(cors_option));

const USERS=[{id:1,userName:"Aditya"},
             {id:1,userName:"Shalaka"},
             {id:1,userName:"ARoshan"}
]
server.get('/',(req,resp)=>{
    resp.send("express is working");

})
server.get('/users',(req,resp)=>{
    resp.setHeader("content-type","application/json");
    resp.send(USERS);
})
server.listen(port,()=>{
    console.log("http://localhost:3000");
});