# ~ Mission 5 Frontend && Trademe Auction Web Application~

## ~ About the project ~

Trade me Auction page was created to give users a way to sell and buy new and secondhand items.
We were provided a project brief and a figma board created by the UX designers to the specifications the client requested.
This repo includes the frontend for the project.

This projects allows users to:
- Sell items
- Buy items
- Compare items
- Search the database

## ~ Pages ~

- Main Search Page
- Product View Page
- Comparison Page

## ~ Components ~

- Navbar
- Footer

## ~ Install ~

- Git clone https://github.com/Brittany-Potato/mission-5-frontend.git

## ~ Setup ~

- npm create vite@latest
- npm i react-router dom
- npm i axios

- npm run dev

## ~ Useage ~

- Use the search panel or the search bars to search for products
- Click on the product under results that you want to look at
- Click compare to add products to compare against eachother
- Ask questions in the product Q & A section under the selected product

## ~ Tech stack ~

- React.js | Frontend
- Node.js | Backend && CLI
- Mongo DB | Database of auction items

## ~ Team members ~

- Brittany | Created the homepage
- Afton | Created the product view page
- Teancum | Comparison page

## ~ Graph/App flow ~

App.jsx
│
├── main.jsx ⟶ Entry point (renders <App />)
│
├── App.jsx
│   └── Routes to different pages:
│       ├── /search                → main-search-page/
│       │   └── main-search-page.jsx
│       │       └── search-page-components/
│       │           ├── search-bar.jsx
│       │           ├── search-directory.jsx
│       │           └── search-pannel.jsx
│       │
│       ├── /comparison            → comparison-table-page/
│       │   ├── ComparisonTablePage.jsx
│       │   └── ComparisonPage.jsx
│       │
│       ├── /buy-now              → buy-now-page/
│       ├── /place-bid            → placebid-page/
│       ├── /product/:id          → product-view-page/
│       ├── /watchlist            → watchlist-page/
│
└── shared-components/           → Common reusable components (e.g., buttons, cards, etc.)
