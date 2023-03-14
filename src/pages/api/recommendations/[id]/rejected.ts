import type { NextApiRequest, NextApiResponse } from 'next';
interface Recommendation {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ recommendations: Recommendation[] }>
) {
  console.log('test');

  if (req.method === 'PUT') {
    res.status(200).json({ status: 'rejected' });
  } else {
    res.status(405);
  }
}
