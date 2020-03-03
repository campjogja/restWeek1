const express = require('express')
const route = express.Router()
const book = require('../controller/book')

route   
    .get('/',book.getBook)
    .post('/addbook', book.addBook)
    .patch('/:idbook',book.updateBook)
    .delete('/', book.deleteBook)

module.exports = route