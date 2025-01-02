import { FETCH_COURSES, ADD_ENQUIRY, FETCH_ENQUIRIES } from "../actions/courseActions";

const initialState = {
  courses: [],
  enquiries: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return { ...state, courses: action.payload };
    case ADD_ENQUIRY:
      return { ...state, enquiries: [...state.enquiries, action.payload] };
    case FETCH_ENQUIRIES:
      return { ...state, enquiries: action.payload };
    default:
      return state;
  }
};

export default courseReducer;
