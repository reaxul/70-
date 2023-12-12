import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id } = item;
  const handleAddToCart = () => {
    saveOrderIdToSessionStorage(_id);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Item Added to Cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const saveOrderIdToSessionStorage = (orderId) => {
    // Retrieve existing orders from Session Storage
    const orders = JSON.parse(sessionStorage.getItem("orders")) || [];

    // Add the new order ID to the orders array
    orders.push(orderId);

    // Save the updated orders array back to Session Storage
    sessionStorage.setItem("orders", JSON.stringify(orders));
  };

  return (
    <div className="card card-compact w-96 bg-stone-800 shadow- hover:shadow-2xl">
      <figure>
        <img className="object-cover h-72 w-96" src={image} alt="Shoes" />
      </figure>
      <p className="absolute top-0 right-0 bg-gradient-to-b from-slate-950 to-transparent px-3 p-1 text-yellow-400 font-bold mt-5 rounded-bl-md">
        {price}/=
      </p>
      <div className="card-body">
        <h2 className="card-title underline">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline mt-4 border-b-4 border-t-0 border-x-0 text-orange-300 hover:bg-orange-400"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
};
export default FoodCard;
