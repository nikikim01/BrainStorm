import { graphql } from "react-relay";
// Queries in graphql tags must start with the module name and end with 'Query'
const PhotoFeedQuery = graphql`
  query PhotoFeedQuery {
    photos {
      id
      url
      caption
      generatedCaption
    }
  }
`;

export default PhotoFeedQuery;
