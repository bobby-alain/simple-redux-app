// count actions
export const RESET = "RESET";
export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

// modal actions
export const MODAL_OPEN = "MODAL_OPEN";
export const MODAL_CLOSE = "MODAL_CLOSE";
// product actions
export const SET_LOADING = "SET_LOADING";
export const GET_PRODUCTS = "GET_PRODUCTS";
// action creators

export const decrease = () => {
  return { type: DECREASE };
};
export const increase = () => {
  return { type: INCREASE };
};
export const reset = () => {
  return { type: RESET };
};
export const modalOpen = (name, text) => {
  return { type: MODAL_OPEN, payload: { name, text } };
};

export const setLoading = () => {
  return { type: SET_LOADING };
};
export const getProducts = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    dispatch({ type: GET_PRODUCTS, payload: data });
  };
};
