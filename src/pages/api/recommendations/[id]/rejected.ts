import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ status: string }>
) {
  if (req.method === 'PUT') {
    res.status(200).json({ status: 'rejected' });
  } else {
    res.status(405);
  }
}
