import { NowRequest, NowResponse } from '@vercel/node'

export default async (request: NowRequest, response: NowResponse) => {

  return response.status(201).json({ ok: true });
}
