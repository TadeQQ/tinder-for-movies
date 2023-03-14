import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string }>
) {
  console.log('test');

  if (req.method === 'PUT') {
    res.status(200).json({ status: 'accepted' });
  } else {
    res.status(405);
  }
}
