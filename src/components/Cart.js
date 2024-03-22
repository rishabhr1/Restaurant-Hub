import { useDispatch, useSelector } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="w-8/12 text-center mx-auto p-4 ">
            <h1 className="text-xl font-bold">Cart</h1>

            <div className="text-right mx-auto py-2 rounded-lg bg-slate-100 px-2">
                <button
                    className=" px-2 py-1 bg-black text-white rounded-lg shadow-lg"
                    onClick={handleClearCart}
                >
                    clear cart
                </button>
                {cartItems.length === 0 && <h1 className="text-center font-bold">Cart is empty!!</h1>}
                {cartItems.map((item) => (
                    <RestaurantItem item={item} />
                ))}
            </div>
        </div>
    );
};

export default Cart;
