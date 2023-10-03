import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    LOGOUT,
  } from "./ActionTypes";
  
  const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt:null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
      case LOGIN_REQUEST:
        return { ...state, isLoading: true, error: null };
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return { ...state, isLoading: false,jwt:action.payload };
      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
      case GET_USER_FAILURE:
        return { ...state, isLoading: false, error: action.payload };
      
      case GET_USER_REQUEST:
        return { ...state, isLoading: true, error: null };
      case GET_USER_SUCCESS:
        return { ...state, isLoading: false,error:null, user: action.payload };

        case LOGOUT:
        //   localStorage.removeItem("jwt");
          return { ...initialState};
      default:
        return state;
    }
  };
  
  export default authReducer;