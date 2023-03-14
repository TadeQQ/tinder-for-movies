import type { NextApiRequest, NextApiResponse } from 'next';
import { recommendations } from '../../../data/db';
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
  res.status(200).json(recommendations);
}
