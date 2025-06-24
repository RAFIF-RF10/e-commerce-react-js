import { Input } from "./ui/Input";
import { Button } from "./ui/button";
import { IoCart, IoHeart } from "react-icons/io5";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-t flex justify-between px-8 items-center h-16">
      {/* BRAND */}
      <p className="text-2xl font-bold hover:cursor-pointer">E-commerce</p>

      {/* SEARCH BAR */}
      <Input className="max-w-[600px]" placeholder="Search Products.." />

      {/* BUTTONS */}
      <div className="flex space-x-4 h-5 items-center ">
        <div className="flex space-x-4">
          <Link to="/cart">
            <Button size="icon" variant="ghost">
              <IoCart className="h-6 w-6" />
            </Button>
          </Link>
          
          <Button size="icon" variant="ghost">
            <IoHeart className="h-6 w-6" />
          </Button>
        </div>
        <Separator orientation="vertical" className="h-full" />

        <div className="flex space-x-2">
          <Button>Log In</Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};
