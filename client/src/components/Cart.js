import { useCart } from "@/context/CartContext";
import { GrClose } from "react-icons/gr";

const Cart = () => {
  const { state, dispatch } = useCart();
  return (
    <div
      className={`fixed transition-all duration-200 top-0 bottom-0 ${state.cartClass}  bg-black/30 z-[1000] backdrop-blur-sm w-full h-full`}
    >
      <div className="absolute top-0 right-0 bottom-0 h-full w-[450px] bg-white">
        <header className="flex items-center justify-between space-x-4 p-4 border-b">
          <h3 className="text-xl font-semibold capitalize">shopping cart</h3>
          <GrClose
            className="text-xl cursor-pointer"
            onClick={() => dispatch({ type: "CLOSE_CART" })}
          />
        </header>
      </div>
    </div>
  );
};

export default Cart;
