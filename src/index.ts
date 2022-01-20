import express, { Request, Response } from 'express'
import { UrlController } from 'controller/UrlController'

// Set config on API
const api = express()
const urlController = new UrlController()

// Able JSON
api.use(express.json())

// Status of API
api.get('/status', (req: Request, res: Response) => {
  res.send({ name: 'Marcos', API: 1.0, year: 2022 })
})

// Hash
api.post('/shorten', urlController.shorten)

// Server Port
api.listen(3000, () => {
  // tslint:disable-next-line: indent
  console.log('Server running at port http://localhost:3000/')
})