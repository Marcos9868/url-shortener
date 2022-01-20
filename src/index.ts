import express from 'express'

const api = express()

api.use(express.json())

api.get('/status', (req, res) => {
  res.send({ name: 'Marcos', API: 1.0, year: 2022 })
})

api.listen(3000, () => {
  // tslint:disable-next-line: indent
  console.log('Server running at port http://localhost:3000/')
})