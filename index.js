const express = require("express")
const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

/*

var DB = {
  games: [
    {
      id: 23,
      title:"Call of duty",
      year: 2019,
      price: 60
    },
    {
      id: 65,
      title:"Sea of thieves",
      year: 2018,
      price: 40
    },
    {
      id: 2,
      title:"Minecraft",
      year: 2012,
      price: 20
    }
  ]
}

*/

app.listen(45678,()=>{
  console.log("API RODANDO!");
});

