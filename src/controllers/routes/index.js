const router = require('express').Router()
const path = require('path')
const Zillow = require('node-zillow')
const model = require('../../models')

const zwsid = process.env.ZWSID
const zillow = new Zillow(zwsid)

const parameters = {
  address: '2114 Bigelow Ave N',
  citystatezip: '98109'
}

router.get('/Zillow_API', (req, res) => {
  zillow.get('GetDeepSearchResults', parameters)
    .then(results => res.json(results))
    .catch(error => console.log('Error in fetching Zillow API', error))
})

router.get('/MockData', (req, res) => {
  data = model.generateMockListings10()
  console.log(data)
  return data
})

router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../dist/index.html'))
})

module.exports = router
