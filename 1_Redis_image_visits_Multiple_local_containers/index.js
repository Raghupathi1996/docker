const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server', //redis client is going to assume that the host is an normal HTTP url and try to connect to this container 
    port: 6379 // optional by default redis is hosted at port 6379
});  //have to specify where the redis server is running

client.set('visits', 0);

app.get('/', (req,res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listening on port 8081');
});