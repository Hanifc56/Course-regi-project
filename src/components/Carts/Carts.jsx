import PropTypes from "prop-types";
import Cart from "../Cart/Cart";

const Carts = ({ carts, remainingCredit, credits, prices }) => {
  return (
    <div className="w-1/3">
      <div className="w-[312px] ml-7 bg-white rounded-lg p-4">
        <h1 className="text-lg font-bold text-blue-400 pb-4">
          Credit Hour Remaining : {remainingCredit} hr
        </h1>
        <hr />
        <div>
          <h2 className="text-xl font-bold text-black">Course Name:</h2>
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
        </div>
        <hr />
        <h3 className=" font-medium text-[#1C1B1BCC]">
          Total Credit Hour:{credits}
        </h3>
        <hr />
        <h3 className=" font-semibold text-[#1C1B1BCC]">
          Total Price: {prices} USD
        </h3>
      </div>
    </div>
  );
};
Carts.propTypes = {
  carts: PropTypes.array,
  prices: PropTypes.number,
  credits: PropTypes.number,
  remainingCredit: PropTypes.number,
};
export default Carts;
