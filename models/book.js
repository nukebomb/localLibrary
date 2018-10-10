var mongoose = require('mongoose')
var Schema = mongoose.Schema

var BookSchema = new Schema(
  {
    title: String,
    author: { type: Schema.ObjectId, ref: 'Author', required: true },
    summary: { type: String },
    isbn: String,
    genre: [{ type: Schema.ObjectId, ref: 'Genre' }]
  }
)

BookSchema
  .virtual('url')
  .get(function () {
    return '/catalog/book/' + this._id
  })

module.exports = mongoose.model('Book', BookSchema)