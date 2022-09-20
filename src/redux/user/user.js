const ADD_USER = 'ADD_USER';
const GET_DATA_USER = 'GET_DATA_USER';

const initialState = [];

// Action Creators
export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const getDataUser = (payload) => ({
  type: GET_DATA_USER,
  payload,
});

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return [action.payload];
    case GET_DATA_USER:
      return [action.payload];
    default:
      return state;
  }
};