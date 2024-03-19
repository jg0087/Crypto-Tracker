const Coin = require('../models/coin')

module.exports = {
    create,
    new: newCoin,
    index,
    show
}
async function show(req, res) {
    const coin = await Coin.findById(req.params.id)
    res.render('coins/show', {
        title: 'Favorie',
        coin
    })

}

async function index(req, res) {
    const coins = await Coin.find({})
    res.render('coins/index', { title: 'Portfolio', coins })
}

function newCoin(req, res) {
    res.render('coins/new', {
        title: 'Add Coin',
        errorMsg: ''
    })
}
async function create(req, res) {
    await Coin.create(req.body)
    res.redirect('coins')
}


