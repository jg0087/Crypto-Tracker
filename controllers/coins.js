const Coin = require('../models/coin')

module.exports = {
    create,
    new: newCoin,
    index,
    show,
    delete: deleteCoin,
    edit: editCoin,
    update
    
}
async function update(req, res) {
    console.log('update')
    console.log(req.params.id)
    const coin = await Coin.findOneAndUpdate({_id:req.params.id}, req.body, {new: true})
    console.log('coin', coin)
    // await coin.updateOne(req.body, { new: true })
    res.redirect('/coins')

}


async function editCoin(req, res) {
    const coin = await Coin.findById(req.params.id)
    res.render('coins/edit', {
        coin: coin,
        title: 'Edit coin',
        errorMsg: ''
    })
}
async function deleteCoin(req, res) {
    await Coin.findByIdAndDelete(req.params.id)
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
    console.log('create')
    await Coin.create(req.body)
    res.redirect('coins')
}


