const express = require('express');
const axios = require('axios');

const app = express();

const apiKey = process.env.NEWS_API_KEY;
const port = process.env.PORT || 80
const pageSize = 12;

app.listen(port, () => {
    console.log(`Example app listening on ${port} 5000!`);
});


app.get("/headlines/:country/:page", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
     const { country,page } = req.params;
    const params = {
        country: country,
        pageSize: pageSize,
        page: page,
        apiKey: apiKey,
    };
    axios
        .get("https://newsapi.org/v2/top-headlines", { params })
        .then(response => res.send(response.data))
        .catch(error => res.status(500).send(error));
});

app.get("/everything/:query/:page", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { query,page } = req.params;
    const params = {
        q: query,
        pageSize: pageSize,
        page: page,
        apiKey: apiKey,
    };
    axios
        .get("https://newsapi.org/v2/everything", { params })
        .then(response => res.send(response.data))
        .catch(error => res.status(500).send(error));
});

app.get('/test', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => res.send(response.data))
        .catch(error => res.status(500).send(error));
});