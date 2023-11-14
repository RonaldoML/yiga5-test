import { types } from "../types/types";


const initialState = {
  stock: [],
}

export const stockReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.stockLoadproducts:
      return {
        ...state,
        ...action.payload,
      };
    case types.stockCreateProduct:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }

}