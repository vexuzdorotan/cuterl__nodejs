const Url = require('../models/modelUrl')

const createUrl = async (req, res) => {
  try {
    // const { origUrl } = req.body
    const { origUrl } = req.body

    const existedOrigUrl = await Url.findOne({ origUrl })

    if (existedOrigUrl)
      return res.status(400).send({ error: 'Url already existed.' })

    // const newUrl = new Url({
    //   origUrl,
    // })

    const newUrl = await Url.create({
      origUrl,
    })

    // await newUrl.save()

    // res.status(201).send(newUrl)
    res.redirect('/')
  } catch (error) {
    res.status(500).send(error)
  }
}

const readUrls = async (req, res) => {
  let { page, limit } = req.query

  page = +page || 1
  limit = +limit || 10

  const urlCount = await Url.find({}).count()
  console.log({ page, limit, urlCount })

  const urls = await Url.find({})
    .limit(+limit)
    .skip((+page - 1) * limit)
  res.render('index', { urls, limit, page, urlCount })
}

const readUrl = async (req, res) => {
  const shortUrl = await Url.findOne({ shortUrl: req.params.shortUrl })

  if (!shortUrl) return res.sendStatus(404)

  shortUrl.numClicks++
  shortUrl.save()

  res.redirect(shortUrl.origUrl)
}

exports.createUrl = createUrl
exports.readUrls = readUrls
exports.readUrl = readUrl
