import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import Footer from "../components/Footer";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [items, setItem] = useState([]);

  async function fetchProductData() {
      setLoading(true);

      try{
        const res = await fetch(API_URL);
        const data = await res.json();

        setItem(data);
      }
      catch(error){
        console.log("Error - Unable to Fetch Data");
        setItem([]);
      }
      setLoading(false);
  }

  useEffect( () => {
    fetchProductData();
  }, []);

  return(
    <div>
      {
        loading ? <div className="flex justify-center items-center mt-[250px] mx-auto"> <Spinner /> </div>  : 
        items.length > 0 ? 
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] mb-8">
          {
            items.map( (item) => (
              <Product key = {item.id} item={item} />
            ))
          }
        </div>) : 
        <div className="flex justify-center items-center">
          <h2>No Data Found !</h2>
        </div>
      }

      {
        !loading && <div className="bg-slate-900 w-full">
          <Footer/>
        </div>
      }

    </div>
  );
};

export default Home;
