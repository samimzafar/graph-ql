import { createContext, useReducer, useContext } from "react";
import CartReducer from "./CartReducer";
const CartContext = createContext();
export const useCart = () => useContext(CartContext);
const CartProvider = ({ children }) => {
  const initState = { cart: [], cartClass: "-right-full" };
  const [state, dispatch] = useReducer(CartReducer, initState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
