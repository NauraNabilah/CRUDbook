const express = require('express')
const router = express.Router()
const {
    getAuthors,
    getAuthor,
    addAuthor,
    updateAuthor,
    deleteAuthor
} = require ('../controllers/AuthorController')

//route untuk menampilkan data
router.get('/', getAuthors)
//route untuk mengirim data
router.post('/', addAuthor)
//route untuk menampilkan data berdasarkan id
router.get('/:id', getAuthor)
//route untuk memperbarui/update data berdasarkan id
router.put('/:id', updateAuthor )
//route untuk menghapus data berdasarkan id
router.delete('/:id', deleteAuthor )

module.exports = router