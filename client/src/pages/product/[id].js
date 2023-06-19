import Rating from "@/components/Rating";
import { useCart } from "@/context/CartContext";
import Head from "next/head";
import Image from "next/image";
import toast from "react-hot-toast";

const Details = ({ product }) => {
  const { dispatch, state } = useCart();
  const { title, image, category, rating, price, description } = product;
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantities: 1 },
      toast,
    });
  };
  console.log("cart => ", state.cart);
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="max-w-screen-xl mx-auto px-5 my-20">
        <div className="grid w-full md:grid-cols-2 gap-10">
          <div className="border px-5 py-20 rounded-lg">
            <div className="relative w-full h-[300px]">
              <Image
                src={image}
                fill
                className="w-full h-full object-contain"
                alt={title}
              />
            </div>
          </div>
          <div>
            <span className="uppercase text-gray-400 text-sm font-normal block mb-2">
              {category}
            </span>
            <h2 className="text-[20px] font-medium mb-3 mt-2">{title}</h2>
            <Rating rating={rating} />
            <h2 className="text-2xl font-semibold mt-3">${price}</h2>
            <p className="mt-6 text-gray-500 leading-[22px]">{description}</p>
            <button
              className="mt-5 inline-block px-6 py-3 rounded-xl bg-black text-white text-sm font-medium capitalize cursor-pointer"
              onClick={addToCart}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Details;
export async function getServerSideProps(context) {
  const {
    query: { id },
  } = context;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  let product = await response.json();
  return {
    props: {
      product,
    },
  };
}
