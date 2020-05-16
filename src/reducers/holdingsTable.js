import { GET_HOLDINGS } from "../types";

const INITIAL_STATE = {
  holdings: null,
};

const holdingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_HOLDINGS: {
      return {
        ...state,
        holdings: action.payload,
      };
    }

    default:
      return state;
  }
};

export default holdingsReducer;
