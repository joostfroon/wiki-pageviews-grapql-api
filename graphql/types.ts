import WikiPageviewsAPI from './WikiPageviewsAPI';

export enum CountriesEnum {
  BE,
  BG,
  DK,
  DE,
  EE,
  FI,
  FR,
  GR,
  HU,
  IE,
  IT,
  HR,
  LV,
  LT,
  LU,
  MT,
  NL,
  AT,
  PL,
  PT,
  RO,
  SI,
  SK,
  ES,
  SE,
  NO,
  UA,
  TR,
  VK,
  CH,
  US,
}

export interface WikiPageviewsArgs {
  country: CountriesEnum;
  year: string;
  month: string;
  day: string;
  limit?: number;
}
  
export interface DataSources {
  dataSources: {
    wikiPageviewsAPI: WikiPageviewsAPI;
  }
}

export interface WikiPageviewsArticle {
  rank: number;
  views: number;
  url: string;
  title: string;
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
