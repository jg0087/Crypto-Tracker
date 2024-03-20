const Coin = require('../models/coin');

module.exports = {
  create,
};

async function create(req, res) {
    const coin = await Coin.findById(req.params.id)
    console.log(coin)
    coin.infos.push(req.body)
    try {
        await coin.save()
    } catch (err) {
        console.log(err)
    }
    res.redirect(`/coins/${coin._id}`)

}