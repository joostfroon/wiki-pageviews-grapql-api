import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import WikiPageviewsAPI from '../../graphql/WikiPageviewsAPI';
import typeDefs from '../../graphql/typeDefs';
import { WikiPageviewsArgs, DataSources } from '../../graphql/types';

const resolvers = {
  Query: {
    wikiPageviews: async (
      _: { _: any }, 
      { country, year, month, day }: WikiPageviewsArgs, 
      { dataSources }: DataSources
    ) => {
      return dataSources.wikiPageviewsAPI.getWikiPageviews({ country, year, month, day });
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

export default startServerAndCreateNextHandler(server, {
  context: async () => {
    const { cache } = server;

    return ({ 
      dataSources: {
        wikiPageviewsAPI: new WikiPageviewsAPI({ cache })
      }
    })
  },
});
