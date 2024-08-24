const { default: axios } = require("axios");
const express = require("express");
const { client } = require("./client");
const app = express();

app.get('/', async (req, res) => {

    const cacheValue = await client.get('todos');
    // const jsonCache = await client.json.set('bike', "$", "kawashaki");
    // console.log("bicycle Cache =>, ", jsonCache);

    if (cacheValue) return res.status(200).json(JSON.parse(cacheValue));

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments");
    console.log(data);
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 30);
    return res.status(200).json(data);

})

app.listen(9000);
