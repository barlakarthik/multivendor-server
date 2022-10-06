import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>hello world</h1>')
})
const port = 5000
app.listen(port, () => {
    console.log(`server lisetning at ${port}`)
})