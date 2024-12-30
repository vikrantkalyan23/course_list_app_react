import React from 'react';
import { useSelector } from 'react-redux';

const Enquiries = () => {
  const enquiries = useSelector((state) => state.enquiries);

  return (
    <div>
      <h2>Enquiries</h2>
      {enquiries.map((enquiry, index) => (
        <div key={index}>
          <p>Name: {enquiry.name}</p>
          <p>Email: {enquiry.email}</p>
          <p>Course ID: {enquiry.courseId}</p>
        </div>
      ))}
    </div>
  );
};

export default Enquiries;
