const express = require('express')
const router = express.Router()

const controllersUrl = require('../controllers/controllersUrl')

router.get('/', controllersUrl.readUrls)
router.post('/', controllersUrl.createUrl)
router.get('/:shortUrl', controllersUrl.readUrl)

module.exports = router
