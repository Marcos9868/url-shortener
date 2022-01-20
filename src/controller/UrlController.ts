import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constants'

export class UrlController {
  public async shorten(req: Request, res: Response): Promise<void> {
    // If URL exists

    // Create hash
    const { originURL } = req.body
    const hash = shortId.generate()
    const shortURL = `${config.API_URL}/${hash}`
    // Save URL on DB

    // Return saved URL

  }
}