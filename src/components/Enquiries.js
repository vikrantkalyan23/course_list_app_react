import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnquiries } from "../redux/actions/courseActions";

const Enquiries = () => {
  const dispatch = useDispatch();
  const enquiries = useSelector((state) => state.coursesData.enquiries);

  useEffect(() => {
    dispatch(fetchEnquiries());
  }, [dispatch]);

  return (
    <div>
      <h2>Enquiries</h2>
      <ul>
        {enquiries.map((enquiry, index) => (
          <li key={index}>
            <p>Name: {enquiry.name}</p>
            <p>Email: {enquiry.email}</p>
            <p>Course: {enquiry.course}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Enquiries;
