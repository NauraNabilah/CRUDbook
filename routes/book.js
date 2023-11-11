const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook,
    search,
    sortBy
} = require ('../controllers/BookController')

//contoh akses http://localhost:3001/search?keyword=mau cari apa
router.get('/search', search)
//contoh akses http://localhost:3001/search?order=DESC / ASC 
router.get('/sort', sortBy)
//route untuk menampilkan data
router.get('/', getBooks)
//route untuk mengirim data
router.post('/', addBook)
//untuk menampilkan data berdasarkan id buku
router.get('/:id', getBook)
//route untuk memperbarui/update data berdasarkan id buku
router.put('/:id', updateBook)
//route untuk menghapus data berdasarkan id buku
router.delete('/:id', deleteBook)

module.exports = router