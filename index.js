const express = require("express");
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', routes);  

const PORT = process.env.SERVER_PORT || 8080;
const HOST = process.env.SERVER_HOST;

const server = app.listen(PORT, HOST, () => {
  var host = server.address().address;
  var port = server.address().port;

  // console.log(`Server is running at ${host}:${port}...`);
  console.log("[ecom_server]: Server is running at http://%s:%s", host, port);  
});