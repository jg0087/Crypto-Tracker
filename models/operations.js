const mongoose = require('mongoose')

const Schema = mongoose.Schema


coinSchema.path('price_usd').get(function(value) {
    if (!this.name) {
        return this.amount * this.price_usd;
    }
    return value
});

const coinSchema = new Schema({
    amount: Number,
    price_usd: Number,
});
