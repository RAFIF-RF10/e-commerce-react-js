import { useState } from  "react" 
import { Button } from "./ui/button";
import { IoIosAdd, IoIosRemove, IoMdRemove } from "react-icons/io";
export const ProductCard = ({ image, name, price, stock }) => {
  // const { Image, ProductName, Price, Stock } = props;
  const [quantity, setQuantity] = useState (0)


  const addToCart = () => {
    setmessage('added')
  }

  const incrementQuantity = () => {
    if(quantity < stock){

      setQuantity(quantity + 1);
    }

    
  }

  const decrementQuantity = ()  => {
    if(quantity > 0){
      setQuantity(quantity  - 1);

    }
  }
  

  return (
    <div className="p-4 border rounded-md md:max-w-96 flex flex-col items-start gap-4 mx-auto">
      <div className="aspect-square w-full overflow-hidden">
        <img src={image} alt={name} className="w-full object-cover" />
      </div>

      <div className="space-y-1">
        <p className="text-md">{name}</p>
        <p className="text-xl font-semibold">
          Rp {price.toLocaleString("id-ID")}
        </p>
        <p className="text-muted-foreground text-sm">In Stock: {stock} </p>
      </div>
      <div>
        {/* button quantity */}
        <div className="flex flex-col gap-2 w-80">
          <div className="flex justify-between items-center">
            <Button disabled={quantity <= 0} onClick={decrementQuantity} size="icon" variant="ghost">
              <IoIosRemove className="h-6 w-6" />
            </Button>
            <p className="text-lg font-bold">{quantity} </p>
            <Button disabled={quantity >= stock} onClick={incrementQuantity} size="icon" variant="ghost" >
              <IoIosAdd className="h-6 w-6" />
            </Button>
          </div>

          {/* button add to cart */}
          <Button disabled={!Boolean(stock)} onClick={addToCart} className="w-full" >
            {
              stock > 0 ? 'Add to Cart' : 'Out of Stock'
            }
            </Button>
        </div>
      </div>
    </div>
  );
};
