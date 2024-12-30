import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEnquiry } from '../store/enquiriesSlice';

const EnquiryForm = ({ courseId }) => {
  const [details, setDetails] = useState({ name: '', email: '', courseId });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEnquiry(details));
    setDetails({ name: '', email: '', courseId });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        value={details.name}
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={details.email}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnquiryForm;
