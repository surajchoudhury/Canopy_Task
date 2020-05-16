import { GET_HOLDINGS, GET_NETWORTH } from "../types";

const getHoldings = (payload) => {
  return {
    type: GET_HOLDINGS,
    payload,
  };
};

const getNetworth = (payload) => {
  return {
    type: GET_NETWORTH,
    payload,
  };
};

export const fetchHoldings = () => {
  return async (dispatch) => {
    const url = `https://canopy-frontend-task.now.sh/api/holdings`;
    const response = await fetch(url, { method: "GET" });
    const data = response.json();
    const holdings = await data;
    dispatch(getHoldings(holdings.payload));
  };
};

export const fetchNetworth = () => {
  return async (dispatch) => {
    const url = `https://canopy-frontend-task.now.sh/api/networth`;
    const response = fetch(url, { method: "GET" });
    const data = (await response).json();
    const networth = await data;
    dispatch(getNetworth(networth));
  };
};
