import { RESTDataSource } from '@apollo/datasource-rest';
import { WikiPageviewsArgs, WikiPageviewsResponse, WikiPageviewsArticle } from './types';

const DEFAULT_ARTICLES_TO_SHOW = 50;

class WikiPageviewsAPI extends RESTDataSource {
  override baseURL = 'https://wikimedia.org';

  async getWikiPageviews({ country, year, month, day, limit }: WikiPageviewsArgs): Promise<WikiPageviewsArticle[]> {
    const response: WikiPageviewsResponse = 
      await this.get(`/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${year}/${month}/${day}`);
      
    const articles = response?.items?.[0]?.articles;
    
    if (!articles) throw new Error('No response from WIKI API');

    return articles.slice(0, limit || DEFAULT_ARTICLES_TO_SHOW).map((article) => {
      return { 
        rank: article.rank,
        title: article.article.replaceAll('_', ' '), 
        views: article.views_ceil || 0,
        url: `https://${article.project}.org/wiki/${article.article}`
      } 
    });
  }
}

export default WikiPageviewsAPI;
