const book = require('../model/book')
const response = require ('../helper/response')
module.exports ={
    getBook : (req,res)=>{
        book.getAllBook()
            .then((result)=>{
                response.response(res,result,200,null)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
    addBook : (req,res) =>{
        let data = {
            title : req.body.title,
            author : req.body.author,
            desc : req.body.description
        }
        
        book.addBook(data)
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                response.response(res,null,401,"Something Wrong")
                
            })
    },
    updateBook : (req,res)=>{
        const idbook = req.params.idbook
        const data = {
            title : req.body.title,
            author : req.body.author,
            desc : req.body.description
        }
        // console.log(data)
        book.updateBook(data,Number(idbook))
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Id Book No found")
            })
    },
    deleteBook : (req,res)=>{
        const idbook = req.params.idbook
        console.log(idbook)
        book.deleteBook(Number(idbook))
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Id Book No found")
            })
    }
}