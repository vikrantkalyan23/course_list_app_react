import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEnquiry } from "../redux/actions/courseActions";

const EnquiryForm = ({ selectedCourse }) => {
  const [details, setDetails] = useState({ name: "", email: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const enquiry = { ...details, course: selectedCourse.name };
    dispatch(addEnquiry(enquiry));
    alert("Enquiry submitted!");
    setDetails({ name: "", email: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enquire About: {selectedCourse.name}</h2>
      <label>
        Name:
        <input
          type="text"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnquiryForm;
