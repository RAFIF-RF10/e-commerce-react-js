import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
const product = {
  name: "Navy Oversized T-Shirt",
  image:
    "https://i.pinimg.com/736x/d4/e4/fd/d4e4fd623af180946c9f51de85d295d2.jpg",
  price: 155000,
  stock: 10,
  id: 1,
};

const productDetailPage = () => {
  const params = useParams();
  params.productId;
  const [quantity, setQuantity] = useState(0);

  return (
    <main className="min-h-screen max-w-screen-lg mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center">
          <h1 className="text-xl font-semibold">{product.name}  </h1>
          <h3 className="text-3xl font-bold text-primary mt-1">
            Rp {product.price.toLocaleString("id-ID")}
          </h3>

          <p className="text-sm text-muted-foreground mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            accusamus molestias, fugiat laudantium odit ratione eaque hic nulla
            ipsa minus. Odio, temporibus? Explicabo consequatur.
          </p>

          <div className="flex items-center gap-8 mt-6">
            <Button size="icon" variant="ghost">
              <IoIosRemove className="h-6 w-6" />
            </Button>
            <p className="text-lg font-bold">{quantity}</p>
            <Button size="icon" variant="ghost">
              <IoIosAdd className="h-6 w-6" />
            </Button>
          </div>
          <div className="flex items-center mt-8 gap-4">
            <Button className="w-full " size="lg">
              Add To card
            </Button>
            <Button size="icon" variant="ghost">
              <IoHeartOutline className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default productDetailPage;
