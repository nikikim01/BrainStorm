import { graphql } from "react-relay";
// Queries in graphql tags must start with the module name and end with 'Query'
const AllPhotosQuery = graphql`
  query AllPhotosQuery {
    photos {
      id
      url
      caption
      generatedCaption
    }
  }
`;

export default AllPhotosQuery;
