var express = require('express')
var app = express()
var moment = require('moment')
var strftime = require('strftime')

var port = process.env.PORT || 8800
// var createJsonRes

app.get('/', function(req,res){
    var dateStr = req.params.date
    
    var resObj = {natural:null, unix:null}
    
    if(isNaN(Number(dateStr))){
        var d = moment(dateStr)
        if(d.isValid()){
            resObj = createJsonRes(d.toDate())
        }
    }
    else{
        var d = moment.unix(Number(dateStr));
        resObj = createJsonRes(d.toDate())
    }
    
    res.json(resObj)
})

app.listen(port, function(){
    console.log("Listening on port: " + port)
})




function createJsonRes(date){
    return{
        natural: formatDate(date),
        unix: date.getTime() / 1000
    }
}

function formatDate(date){
    return strftime("%B %d, %Y",date)
}


