const router = require('express').Router()
const path = require('path')
const Zillow = require('node-zillow')

const zwsid = process.env.ZWSID
const zillow = new Zillow(zwsid)

const parameters = {
  address: 'San Francisco',
  citystatezip: 'San Francisco'
}

router.get('/Zillow_API', (req, res) => {
  zillow.get('GetSearchResults', parameters)
    .then(results => res.json(results))
    .catch(error => console.log('Error in fetching Zillow API', error))
})

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../dist/index.html'))
})

module.exports = router
