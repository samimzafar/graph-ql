const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "OPEN_CART":
      return { ...state, cartClass: "right-0" };
    case "CLOSE_CART":
      return { ...state, cartClass: "-right-full" };
    case "ADD_TO_CART":
      const product = state.cart.find((item) => item.id === payload.id);
      if (product) {
        action.toast("Sorry, product is already in the cart", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      } else {
        action.toast("Great job, Product added in the cart", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        return { ...state, cart: [...state.cart, payload] };
      }
    default:
      return state;
  }
};
export default CartReducer;
