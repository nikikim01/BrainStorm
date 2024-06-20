import { graphql } from "react-relay";

const DeletePhotoMutation = graphql`
  mutation DeletePhotoMutation($url: String!) {
    deletePhoto(url: $url) {
      id
      url
    }
  }
`;

export default DeletePhotoMutation;
