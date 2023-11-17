import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
const Course = ({ course }) => {
  const { course_title, cover_img, course_description, price, credit } = course;
  return (
    <div className="bg-white rounded-lg p-4">
      <img src={cover_img} alt="" />
      <h2 className="font-semibold text-xl py-4">{course_title}</h2>
      <p className="text-sm font-normal pb-4 text-[#1C1B1B99]">
        {course_description}
      </p>
      <p className="">
        <RiMoneyDollarCircleLine />
        <span>Price: {price} </span>
        <IoBookOutline />
        <span>Credit: {credit} </span>
      </p>
      <button className="">Select</button>
    </div>
  );
};

export default Course;
