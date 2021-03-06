import React from "react";
import { gql } from "apollo-boost";
import { Query, Mutation } from "react-apollo";

import CartDropdown from "./cart-dropdown.component";

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const TOGGLE_CART_HIDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const CartDropdownContainer = () => (
  <Mutation mutation={TOGGLE_CART_HIDEN}>
    {(toggleCartHidden) => (
      <Query query={GET_CART_ITEMS}>
        {({ data }) => {
          const { cartItems } = data;

          return (
            <CartDropdown
              toggleCartHidden={toggleCartHidden}
              cartItems={cartItems}
            />
          );
        }}
      </Query>
    )}
  </Mutation>
);

export default CartDropdownContainer;
