var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var pathtofile = path.join(__dirname,'dist');
var port = process.env.PORT || 5000;
app = express();
app.use(express.static(pathtofile));
app.get('*',(req,res)=>{
    res.sendFile(pathtofile,'index.html');
})
console.log('server started ' + port);
app.listen(port);

