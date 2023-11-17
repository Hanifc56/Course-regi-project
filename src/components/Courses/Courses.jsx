import PropTypes from "prop-types";

import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({ handleCourse }) => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="w-2/3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <Course
            key={course.id}
            handleCourse={handleCourse}
            course={course}
          ></Course>
        ))}
      </div>
    </div>
  );
};
Courses.propTypes = {
  handleCourse: PropTypes.func.isRequired,
};
export default Courses;
