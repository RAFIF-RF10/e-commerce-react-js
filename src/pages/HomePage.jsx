import { Footer } from "../components/Footer";
import  { Header } from "../components/Header";
import { ProductCard } from "../components/ProductCard";

const productsRaw = [
{
      name:"Navy  T-Shirt",
      image:"https://i.pinimg.com/736x/d4/e4/fd/d4e4fd623af180946c9f51de85d295d2.jpg",
      price:155000,
      stock:10,
},
{
      name:"green  Oversized T-Shirt",
      image:"https://i.pinimg.com/736x/b1/9a/48/b19a486b14abbd853fa3b7443a5b1869.jpg",
      price:125000,
      stock:0,
}
];
const HomePage = () => {
    const products = productsRaw.map((product) => {
        return (
          <ProductCard 
          image={product.image}
          name={product.name}
          stock={product.stock}
          price={product.price}
          />
        )
      }); 
    
      
    
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2"> {products}</div>
          </main>
    
        </>
      );
}

export default HomePage;