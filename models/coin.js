const mongoose = require('mongoose')

const Schema = mongoose.Schema

module.exports = {
    deleteOne
}
function deleteOne(id) {
    id = parseInt(id)
    const idx = coins.findIndex(coin => coin.id === id)
    coins.splice(idx, 1)
}

const infosSchema = new Schema ({
    content: {
        type: String,
    },
    buying: {
        type: Number,
    },
    selling: {
        type: Number,
    }

    }, {
        timestamps: true
    })

const coinSchema = new Schema({
  rank: Number,
  amount: Number,
  name: String,
  symbol: String,
  price_usd: String,
  value: Number,
  infos: [infosSchema]
})


module.exports = mongoose.model('Coin', coinSchema)