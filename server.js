const express = require ("express");
const app = express();



const exphbs = require("express-handlebars");



var PORT = process.env.PORT || 9000;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/routes.js");

app.use('/', routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });