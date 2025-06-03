import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../Slices/cartSlice";
import { CDN_URL } from "../utils/ConstantData";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <div className="container mx-auto p-4 md:p-8 mt-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        {" "}
        Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <p className="text-xl text-gray-600 mb-4">
            Your cart is empty! Time to fill it with delicious food!
          </p>
          <img
            src="https://cdn.dribbble.com/userupload/23000951/file/original-51162083f8d27d9af7c6c0a19b9116ba.gif"
            alt="Empty Cart"
            className="mx-auto w-54 h-64 object-contain"
          />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={handleClearCart}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors duration-200"
            >
              Clear Cart
            </button>
          </div>

          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between py-4 sm:py-6"
              >
                <div className="flex items-center gap-4 flex-grow">
                  {item.imageId && (
                    <img
                      src={CDN_URL + item.imageId}
                      alt={item.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-md shadow-sm"
                    />
                  )}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h2>
                    <p className="text-lg text-gray-700">
                      ₹{(item.price || item.defaultPrice) / 100}
                    </p>
                    {item?.ratings?.aggregatedRating?.rating && (
                      <p className="text-sm text-gray-500">
                        {item?.ratings?.aggregatedRating?.rating}⭐
                      </p>
                    )}
                    {item.description && (
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="ml-4 px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">Total:</h3>
            <p className="text-2xl font-bold text-green-600">
              ₹
              {cartItems
                .reduce(
                  (total, item) =>
                    total + (item.price || item.defaultPrice) / 100,
                  0
                )
                .toFixed(2)}
            </p>
          </div>

          <div className="mt-8 text-center">
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-200 text-xl">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
