const Cart = ({ cart }) => {
  const { course_title } = cart;
  return (
    <div>
      <ol className="list-item">
        <li>{course_title}</li>
      </ol>
    </div>
  );
};

export default Cart;
