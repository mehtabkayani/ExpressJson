const express = require('express');
const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const data = require("./data.json")





//app.use('/public',express.static(path.join(__dirname,'public','static')))
app.use(express.static('public', {extensions: ['html']}));



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'index.html'));
})


app.get('/data', (req, res) => {
    return res.json(data);
    
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


