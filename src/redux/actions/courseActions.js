import axios from "axios";

export const FETCH_COURSES = "FETCH_COURSES";
export const ADD_ENQUIRY = "ADD_ENQUIRY";
export const FETCH_ENQUIRIES = "FETCH_ENQUIRIES";

const API_URL = "http://localhost:5000";

export const fetchCourses = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/courses`);
  dispatch({ type: FETCH_COURSES, payload: response.data });
};

export const addEnquiry = (enquiry) => async (dispatch) => {
  const response = await axios.post(`${API_URL}/enquiries`, enquiry);
  dispatch({ type: ADD_ENQUIRY, payload: response.data });
};

export const fetchEnquiries = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/enquiries`);
  dispatch({ type: FETCH_ENQUIRIES, payload: response.data });
};
