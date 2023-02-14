import { RESTDataSource } from '@apollo/datasource-rest';
import { WikiPageviewsArgs, WikiPageviewsResponse, WikiPageviewsArticle } from './types';

class WikiPageviewsAPI extends RESTDataSource {
  override baseURL = 'https://wikimedia.org';

  async getWikiPageviews({ country, year, month, day }: WikiPageviewsArgs): Promise<WikiPageviewsArticle[]> {
    const response: WikiPageviewsResponse = 
      await this.get(`/api/rest_v1/metrics/pageviews/top-per-country/${country}/all-access/${year}/${month}/${day}`);

    const articles = response?.items?.[0]?.articles;
    
    if (!articles) throw new Error('No response from WIKI API');

    return articles.map((article) => {
      return { 
        ...article, 
        views: article.views_ceil || 0,
        url: `https://${article.project}.org/wiki/${article.article}`
      } 
    });
  }
}

export default WikiPageviewsAPI;
