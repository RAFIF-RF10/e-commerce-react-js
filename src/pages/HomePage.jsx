import { axiosInstance } from "../lib/axiox";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { Skeleton } from "../components/ui/skeleton";

const HomePage = () => {
  const [productIsLoading, setProductIsLoading] = useState(false);
  const [products, setProduct] = useState([]);

  const productsList = products.map((product) => {
    return (
      <ProductCard
        id={product.id}
        image={product.image}
        name={product.name}
        stock={product.stock}
        price={product.price}
      />
    );
  });

  const fetchProducts = async () => {
    setProductIsLoading(true);
    try {
      const response = await axiosInstance.get("/products");
      console.log(response.data);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setProductIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <main className="min-h-[80vh] max-w-screen-md mx-auto px-4 mt-8">
        <div className="pb-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Become a trend-setter with us
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            FastCampusCommerce provides you with the finest clothings and ensure
            your confidence throughout your days
          </p>
        </div>
        {productIsLoading ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
            {productsList}
          </div>
        )}
      </main>
    </>
  );
};

export default HomePage;
