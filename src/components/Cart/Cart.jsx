import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  const { course_title } = cart;
  return (
    <div>
      <ol className="list-disc pl-4">
        <li> {course_title}</li>
      </ol>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.object,
};
export default Cart;
