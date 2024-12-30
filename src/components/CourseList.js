import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/coursesSlice';

const CourseList = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.courses);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h2>Courses</h2>
      {status === 'loading' && <p>Loading...</p>}
      {items.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
          <button>Enquire</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
