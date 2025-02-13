import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add, remove} from "../redux/Slices/cartSlice";
import "./Product.css"

const Product = ({item}) => {

  const {cart} = useSelector((state) => state);
  
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart"); 
  }

  return(
    <div className="group flex flex-col items-center justify-between 
    hover:scale-110 transition duration300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
    hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left"
        >{item.description.split(" ").splice(0,10).join(" ") + "..."}</p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="img"
        className="h-full w-full"></img>
      </div>

      <div className="flex justify-between gap-10 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>
        
        {
          cart.some((p) => p.id === item.id) ? 
          (<button 
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
          group-hover:bg-gray-700
          group-hover:text-white transition duration-300"
          onClick={removeFromCart}>
            Remove Item
          </button>) : 
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase
          group-hover:bg-gray-700
          group-hover:text-white transition duration-300"
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
      </div>
      
    </div>
  );
};

export default Product;
