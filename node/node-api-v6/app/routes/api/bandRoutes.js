const express = require("express")
const router = express.Router()

// Destructure artistDao
const { bandDao: dao} = require('../../daos/dao')

// localhost:3000/api/artist
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

// localhost:3000/api/count
router.get('/count', (req, res)=> {
    dao.countAll(res, dao.table)
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res)
})

router.get('/:id', (req, res)=> {
    dao.getInfo(res, dao.table, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res, dao.table)
})

router.patch('/update/:id', (req, res)=> {
    dao.update(req, res)
})

module.exports = router