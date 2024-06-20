import { graphql } from "react-relay";

const AddPhotoMutation = graphql`
  mutation AddPhotoMutation($url: String!, $caption: String) {
    addPhoto(url: $url, caption: $caption) {
      id
      url
      caption
    }
  }
`;

export default AddPhotoMutation;
