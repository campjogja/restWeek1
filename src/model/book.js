const connection = require('../config/db');

module.exports = {
    getAllBook : () =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM book', (err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    addBook : (data) =>{
        return new Promise ((resolve,reject)=>{
            connection.query(`INSERT INTO book SET ?`,data, (err, result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject (new Error (err))
                }
            })
        })
    },
    updateBook : (data,idBook) => {
        
        // console.log(id)
        return new Promise ((resolve, reject)=>{
            connection.query(`UPDATE book SET ? WHERE id_book = ?`,[data,idBook],(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    },
    deleteBook:(idbook) =>{
        console.log(idbook)
        return new Promise ((resolve, reject)=>{
            connection.query(`DELETE FROM book WHERE id_book = ?`,idbook,(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    }
}