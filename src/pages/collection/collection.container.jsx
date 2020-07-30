import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import Spinner from "../../components/spinner/spinner.component";
import CollectionPage from "./collection.component";

const GET_COLLECTION = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageContainer = ({ match }) => (
  <Query
    query={GET_COLLECTION}
    variables={{ title: match.params.collectionId }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Spinner />;

      const { getCollectionsByTitle } = data;

      return <CollectionPage collection={getCollectionsByTitle} />;
    }}
  </Query>
);

export default CollectionPageContainer;
