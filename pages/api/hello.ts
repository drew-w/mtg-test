// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
const Magic = require('mtgsdk-ts')
type Data = {
  name: string
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    // console.log(req.query?.name)
    const name = req?.query?.name
    // console.log('name', name)
    const [response] = await Magic.Cards.where({ name, types: 'Creature' })
    if (response) {
      res.status(200).json(response)
    } else {
      res.status(500)
    }
  }
}
