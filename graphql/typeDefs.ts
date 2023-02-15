import { gql } from 'graphql-tag';

export default gql`
  type WikiPageviews {
    project: String!
    views: Int!
    rank: Int!
    url: String!
    title: String!
  }
  
  enum Countries {
    BE 
    BG
    DK
    DE
    EE
    FI
    FR
    GR
    HU
    IE
    IN
    IT
    HR
    LV
    LT
    LU
    MT
    NL
    AT
    PL
    PT
    RO
    SI
    SK
    ES
    SE
    NO
    UA
    TR
    VK
    CH
    US
  }

  type Query {
    wikiPageviews(
      country: Countries!, 
      year: String!, 
      month: String!, 
      day: String!,
      limit: Int,
    ): [WikiPageviews!]!
  }
`;
