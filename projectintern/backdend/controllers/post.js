export const post =(req, res) => {

    const data = req.body;
    console.log(data,"my data");

    res.send(data);

// console.log(data);
};
