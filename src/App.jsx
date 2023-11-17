import { useState } from "react";
import "./App.css";
// import swal from "sweetalert";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Carts from "./components/Carts/Carts";
import swal from "sweetalert";

function App() {
  const [carts, setCart] = useState([]);
  const [remainingCredit, setRemainingCredit] = useState(0);
  const [credits, setCredits] = useState(0);
  const [prices, setPrice] = useState(0);

  const handleCourse = (course, credit, price) => {
    console.log(...carts);

    const duplicateNameFilter = carts.find((cart) => cart.id == course.id);
    if (duplicateNameFilter) {
      swal("This course already in cart!!!");
    } else {
      setCart([...carts, course]);
      const newCredit = credits + credit;
      if (newCredit > 20) {
        swal("Credit limit is over!!!");
      } else {
        setCredits(newCredit);
        const newPrice = prices + price;
        setPrice(newPrice);
      }

      const restCredit = 20 - newCredit;
      const remainingCredit = restCredit;
      if (remainingCredit < 0) {
        swal("Credit is low!!!");
      } else {
        setRemainingCredit(remainingCredit);
      }
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex flex-col lg:flex-row max-w-7xl  mx-auto my-12  ">
        <Courses handleCourse={handleCourse}></Courses>
        <Carts
          carts={carts}
          remainingCredit={remainingCredit}
          credits={credits}
          prices={prices}
        ></Carts>
      </div>
    </>
  );
}

export default App;
