const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const book = require('./src/route/book')
const logger = require('morgan')
app.use(
    bodyParser.urlencoded({
        extended : true
    })
)
app.use(logger('dev'))
app.use(bodyParser.json())
app.listen(port,()=>{
    console.log("Server On using Port",port)
})

app.use('/api/v1',book)

module.exports = app