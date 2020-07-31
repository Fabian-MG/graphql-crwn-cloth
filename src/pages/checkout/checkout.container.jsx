import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import CheckoutPage from "./checkout.component";

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_CART_TOTAL = gql`
  {
    cartTotal @client
  }
`;

const CheckoutPageContainer = () => (
  <Query query={GET_CART_ITEMS}>
    {({ data: { cartItems } }) => {
      return <CheckoutPage cartItems={cartItems} />;
    }}
  </Query>
);

export default CheckoutPageContainer;
