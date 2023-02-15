## GraphQL api for querying Wikipedia page views per country
 
- country*: The ISO 3166-1 alpha-2 code of a country for which to retrieve top articles, like 'FR' or 'IN',
- year*: The year for which to retrieve top articles, in YYYY format,
- month*: The month for which to retrieve top articles, in MM format,
- day*: The day for which to retrieve top articles, in DD format.
- limit: number of items to show, defaults to 50

**Example query:**
```
query {
  wikiPageviews(country: NL, year: "2021", month: "01", day: "06", limit: 20) {
    rank
    views
    url
    title
  }
}
```

**Maybe the api is still live at [https://main--wiki-pageviews-grapql-api.netlify.app/api/graphql](https://main--wiki-pageviews-grapql-api.netlify.app/api/graphql):**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql) with your browser to see the result.

## TODOS
- use codegen
- tests
- date to enum?


