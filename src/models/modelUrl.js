const mongoose = require('mongoose')
const { nanoid } = require('nanoid')

const urlSchema = new mongoose.Schema(
  {
    origUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
      default: nanoid(6),
    },
    numClicks: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Url', urlSchema)
