import { gql } from 'graphql-tag';

export default gql`
  type WikiPageviews {
    article: String!
    project: String!
    views: Int!
    rank: Int!
    url: String!
  }
  type Query {
    wikiPageviews(
      country: String!, 
      year: String!, 
      month: String!, 
      day: String!
    ): [WikiPageviews!]!
  }
`;
