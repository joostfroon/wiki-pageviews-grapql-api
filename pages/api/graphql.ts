import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServerPluginLandingPageGraphQLPlayground } from '@apollo/server-plugin-landing-page-graphql-playground';
import WikiPageviewsAPI from '../../graphql/WikiPageviewsAPI';
import typeDefs from '../../graphql/typeDefs';
import { WikiPageviewsArgs, DataSources } from '../../graphql/types';

const resolvers = {
  Query: {
    wikiPageviews: async (
      _: { _: any }, 
      { country, year, month, day, limit }: WikiPageviewsArgs, 
      { dataSources }: DataSources
    ) => {
      return dataSources.wikiPageviewsAPI.getWikiPageviews({ country, year, month, day, limit });
    },
  },
};

const server = new ApolloServer({
  resolvers,
  typeDefs,
  csrfPrevention: true,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
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
