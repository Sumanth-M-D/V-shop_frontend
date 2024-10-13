import { useNavigate } from "react-router-dom";
import Ratings from "../general/Ratings";
import AddtoCartBtn from "../general/AddtoCartBtn";
import AddToWishlistBtn from "../general/AddToWishlistBtn";

function ProductCard({ product }) {
  const { category, id, image, price, rating, title } = product;
  const navigate = useNavigate();

  function navigateTOProductDetail() {
    navigate(`/products/${id}`);
  }

  const productToCart = { title, id, image, price, quantity: 1 };
  const productToWishlist = { title, id, image, price };

  return (
    <div className="w-40 xs:w-60 borderSecondary hover:scale-105 duration-200 ">
      <div
        className="w-full h-60  flex items-end mb-4 bg-secondary px-6 xs:px-14 py-4 cursor-pointer hover:shadow-md duration-200 "
        onClick={navigateTOProductDetail}
      >
        <img src={image} />
      </div>

      <div className="text-center xs:h-72 h-80 flex flex-col justify-around px-4 pb-4 text-secondary--shade__2 ">
        <p className="capitalize text-secondary--shade__1 text-xs ">
          {category}
        </p>
        <p
          className="text-sm  hover:text-primary--shade__1 hover:font-bold cursor-pointer duration-200"
          onClick={navigateTOProductDetail}
        >
          {title}
        </p>
        <p className="text-base text-primary--shade__1 font-semibold">
          {"$ " + price}
        </p>

        <div className="flex flex-col sm:flex-row gap-1  items-center justify-around pb-6">
          <Ratings rating={rating} />
          <p className="text-xs sm:text-sm">
            {"( " + rating.count + " Reviews )"}
          </p>
        </div>

        <div className=" flex flex-col gap-2 justify-self-end ">
          <AddtoCartBtn product={productToCart} />
          <AddToWishlistBtn product={productToWishlist} />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
