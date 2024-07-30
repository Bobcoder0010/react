import express from 'express';

const app = express();
app.use(express.json());


//get post put delete 

app.post("/post", (req, res) => {
    const data = req.body;
    res.send(data);
  
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');


});

