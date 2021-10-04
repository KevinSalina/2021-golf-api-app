const express = require('express')
const router = express.Router()
const { getAllGolfers, getGolferById, createGolfer } = require('../controllers/golfers')


router.get('/', async (req, res) => {
  const allGolfers = await getAllGolfers()

  return allGolfers ? res.send(allGolfers) : res.status(404).send('Golfers not found')
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  const golfer = await getGolferById(id)

  return golfer ? res.send(golfer) : res.status(404).send('Golfer not found')

})

router.post('/', async (req, res) => {
  const golferData = req.body
  const newGolfer = await createGolfer(golferData)

  return res.status(newGolfer.status).send(newGolfer.message)
})

module.exports = router