import { graphql } from "react-relay";

const UpdatePhotoMutation = graphql`
  mutation UpdatePhotoMutation(
    $url: String!
    $newUrl: String
    $caption: String
  ) {
    updatePhoto(url: $url, newUrl: $newUrl, caption: $caption) {
      id
      url
      caption
      generatedCaption
    }
  }
`;

export default UpdatePhotoMutation;
