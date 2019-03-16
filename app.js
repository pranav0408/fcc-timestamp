var express = require('express')
var app = express()

app.get('/api/timestamp/:date_string',function(req,res,next){
        if(req.params.date_string===null)
            req.params.date_string = new Date();
            next();
        },
        function(req,res){
          var date=new Date(req.params.date_string)
          if(date.isValid)
            res.json({"unix": date.getTime(), "utc" : date.toUTCString()})
          else
            res.json({"error" : "Invalid Date" })
      })