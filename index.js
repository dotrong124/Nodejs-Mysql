const express = require('express')
const app = express()
const port = 3000
var controller = require("./app/controller")
var bodyParser = require("body-parser")
const path = require('path')


app.use(controller)
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));


app.set("views", __dirname +"/app/view")
app.set("view engine","ejs")


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})