import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "../redux/actions/courseActions";

const CourseList = ({ onEnquire }) => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.coursesData.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <button onClick={() => onEnquire(course)}>Enquire</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
