import { NowRequest, NowResponse } from '@vercel/node'

export default async (request: NowRequest, response: NowResponse) => {
    const { email } = request.body;

    return response.status(201).json({ ok: `${email}`});
}
