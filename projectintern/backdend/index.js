import express from 'express';

const app = express();


//get post put delete 

app.get("/", (req, res) => {
    res.send('Hello World');
});









app.listen(3000, () => {
    console.log('Server is running on port 3000');


});

