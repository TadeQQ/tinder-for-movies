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
  res.status(200).json({
    recommendations: [
      {
        id: '1and3011',
        imageURL:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        title: 'Inferno',
        summary: 'Lorem ipsum….',
        rating: 5.3,
      },
      {
        id: '2301abc',
        imageURL:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg',
        title: 'Star Wars: Episode VII - The Force Awakens',
        summary: 'Lorem ipsum….',
        rating: 8.2,
      },
      {
        id: '3045abc',
        imageURL:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIxNzIxMTUxMl5BMl5BanBnXkFtZTcwNzIyNzUyMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        title: 'The Dark Knight',
        summary: 'Lorem ipsum….',
        rating: 9.0,
      },
      {
        id: '4080abc',
        imageURL:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTIyMTIxNDYwN15BMl5BanBnXkFtZTcwNjcyNTI2Mw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        title: 'The Shawshank Redemption',
        summary: 'Lorem ipsum….',
        rating: 9.3,
      },
      {
        id: '5015abc',
        imageURL:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTc5NDI2NzM5Ml5BMl5BanBnXkFtZTgwNjIyODU4MTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        title: 'Jurassic Park',
        summary: 'Lorem ipsum….',
        rating: 8.1,
      },
      {
        id: '6030abc',
        imageURL:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MzgxODUyNl5BMl5BanBnXkFtZTgwMTU0Nzg5MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        title: 'Forrest Gump',
        summary: 'Lorem ipsum….',
        rating: 8.8,
      },
    ],
  });
}
