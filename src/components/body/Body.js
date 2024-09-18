import { Link } from "react-router-dom";

function Body() {
  return (
    <div className="pl-3">
      <h2>Body</h2>

      <h3>
        path for products:{" "}
        <Link to={"/products"} className="text-xl text-red-500">
          /products
        </Link>{" "}
      </h3>
      <h3>
        path for product details:{" "}
        <Link to={"/product-details"} className="text-xl text-red-500">
          /product-details
        </Link>
      </h3>
      <h3>
        path for checkout:{" "}
        <Link to={"/checkout"} className="text-xl text-red-500">
          /checkout
        </Link>{" "}
      </h3>
    </div>
  );
}

export default Body;
