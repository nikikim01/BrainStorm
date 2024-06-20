import { graphql } from "react-relay";

const PhotoByUrlQuery = graphql`
  query PhotoByUrlQuery($url: String!) {
    photo(url: $url) {
      id
      url
      caption
      generatedCaption
    }
  }
`;

export default PhotoByUrlQuery;
