import express from 'express';
import post from './routes/post.router.js';

const app = express();


app.use(express.json());

app.use("/" ,post);



//get post put delete 

// app.post("/post", (req, res) => {
//     const data = req.body;
//     res.send(data);
  
// });

// app.get("/post", (req, res) => {
//     const data =req.body;
//     res.send("Hello world ");
// });




app.listen(3000, () => {
    console.log('server is running on port 3000... ');


});

