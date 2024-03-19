const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coinSchema = new Schema({
  rank: Number,
  amount: Number,
  name: String,
  symbol: String,
  price_usd: String,
  value: Number
  
});


module.exports = mongoose.model('Coin', coinSchema)