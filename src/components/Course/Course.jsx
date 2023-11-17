import PropTypes from "prop-types";

import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoBookOutline } from "react-icons/io5";
const Course = ({ course, handleCourse }) => {
  const { id, course_title, cover_img, course_description, price, credit } =
    course;
  return (
    <div className="bg-white rounded-lg p-4 ">
      <img src={cover_img} alt="" />
      <h2 className="font-semibold text-xl py-4">{course_title}</h2>
      <p className="text-sm font-normal pb-4 text-[#1C1B1B99]">
        {course_description}
      </p>
      <div className="flex items-center">
        <span className="text-2xl text-black">
          <RiMoneyDollarCircleLine />
        </span>
        <span className="font-medium text-base text-[#1C1B1B99] pl-4">
          Price: {price}{" "}
        </span>
      </div>
      <div className="flex items-center mt-2">
        <span className="text-2xl text-black">
          <IoBookOutline />
        </span>
        <span className="font-medium text-base text-[#1C1B1B99] pl-4">
          Credit: {credit} hr{" "}
        </span>
      </div>
      <button
        onClick={() => handleCourse(course, id, price)}
        className="mx-2 px-20  mt-6 text-center py-3 bg-[#2F80ED] rounded-lg font-semibold text-lg text-white"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleCourse: PropTypes.func.isRequired,
};
export default Course;
