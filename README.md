# Tinder for movies
It is Single-page application for selecting a movie to watch using your phone.

```
Example data.
/recommendations
[{
id: “1and3011”,
imageURL:
“https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5
BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg”,
title: “Inferno”,
summary: “Lorem ipsum….”,
rating: 5.3},
{id: “2301abc”,
imageURL:
“https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5
BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg”,
title: “Star Wars: Episode VII - The Force Awakens”,
summary: “Lorem ipsum….”,
rating 8.2}
]
```

• The application shows the movie titles, image, summary and rating.

• The user can accept or reject the suggestion. Accepting is done by a green button.
Rejecting is done by red button or swipe.

• The backend gets notified of a user's decision by a PUT call to
/recommendations/<id>/accept or /recommendations/<id>/reject URL.
  
Framework:
  
• Next.js
  
• Jest, react-testing-library

• React hooks
  
• TypeScript.
  
• Usage of context provider to decouple data fetching from presentation layer.
  


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
