import { ActionType } from "../constant/Action-type";

export const cartProducts = (products) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: products,
  };
};



export const removeCart = (products) =>{
  return {
    type:ActionType.REMOVE_CART,
    payload:products,
  }
}

