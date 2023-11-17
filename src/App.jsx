import { useState } from "react";
import "./App.css";
// import swal from "sweetalert";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Carts from "./components/Carts/Carts";

function App() {
  const [carts, setCart] = useState([]);
  const [prices, setPrice] = useState(0);
  const handleCourse = (course, id, credit, price) => {
    const newCart = [...carts, course];
    setCart(newCart);
    const newPrice = prices + price;
    setPrice(newPrice);
    console.log(newPrice);
  };
  return (
    <>
      <Header></Header>
      <div className="flex flex-col lg:flex-row max-w-7xl  mx-auto my-12  ">
        <Courses handleCourse={handleCourse}></Courses>
        <Carts prices={prices} carts={carts}></Carts>
      </div>
    </>
  );
}

export default App;
