import React, { useState } from "react";
import CourseList from "./components/CourseList";
import EnquiryForm from "./components/EnquiryForm";
import Enquiries from "./components/Enquiries";

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <div>
      <h1>Course List Application</h1>
      <button onClick={() => setSelectedCourse(null)}>Courses</button>
      <button onClick={() => setSelectedCourse("enquiries")}>Enquiries</button>

      {selectedCourse === null ? (
        <CourseList onEnquire={(course) => setSelectedCourse(course)} />
      ) : selectedCourse === "enquiries" ? (
        <Enquiries />
      ) : (
        <EnquiryForm selectedCourse={selectedCourse} />
      )}
    </div>
  );
};

export default App;
