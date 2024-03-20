const Coin = require('../models/coin')

module.exports = {
    create,
    new: newCoin,
    index,
    show,
    delete: deleteCoin
    
}
function deleteCoin(req, res) {
    Coin.deleteOne(req.params.id)
    res.redirect('/coins')


}

async function show(req, res) {
    const coin = await Coin.findById(req.params.id)
    res.render('coins/show', {
        title: 'Info',
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


