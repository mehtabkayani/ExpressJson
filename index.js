const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const data = require("./data.json")
const axios = require('axios');
const { response } = require('express');




//app.use('/public',express.static(path.join(__dirname,'public','static')))
app.use(express.static('public'))



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.get('/restaurant', function (req, res) {
    console.log(getResturantList)
    return res.sendFile(path.join(__dirname, 'public/static', 'restaurant.html'))
})

app.get('/data', (req, res) => {
    return res.json(data);
    //return res.sendFile(path.join(__dirname,'public','data.json'))
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


