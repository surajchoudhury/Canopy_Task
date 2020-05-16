import { GET_NETWORTH } from "../types";

const INITIAL_STATE = {
  networth: null,
};

const networthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NETWORTH: {
      return {
        ...state,
        networth: action.payload,
      };
    }

    default:
      return state;
  }
};

export default networthReducer;
