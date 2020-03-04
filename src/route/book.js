const express = require('express')
const route = express.Router()
const book = require('../controller/book')
const auth = require('../helper/auth')

route 
    // .all('*',auth.authInfo)
    .get('/',auth.authInfo, auth.accessToken ,book.getBook)
    .post('/addbook', book.addBook)
    .patch('/:idbook',book.updateBook)
    .delete('/:idbook', book.deleteBook)

module.exports = route