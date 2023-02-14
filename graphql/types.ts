import WikiPageviewsAPI from './WikiPageviewsAPI';

export interface WikiPageviewsArgs {
  country: string;
  year: string;
  month: string;
  day: string;
}
  
export interface DataSources {
  dataSources: {
    wikiPageviewsAPI: WikiPageviewsAPI;
  }
}

export interface WikiPageviewsArticle {
  article: string;
  project: string;
  rank: number;
  views: number;
}

interface WikiPageviewsItem {
  articles: {
    article: string;
    project: string;
    rank: number;
    views_ceil: number;
  }[]
}

export interface WikiPageviewsResponse {
  items?: WikiPageviewsItem[]
}
