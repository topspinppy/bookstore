// @ts-nocheck
import { createContext, useReducer } from "react"
import { initialState, reducer } from "../reducer"
import { ActionType } from "../reducer/action"

export const CartContext = createContext()

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = {
    product: state.product,
    cart: state.cart,
    shippingPrice: state.shippingPrice,
    addToCart: (cart) => {
      dispatch({ type: ActionType.SET_CART, payload: cart })
    },
    addAdditionCart: (cart) => {
      dispatch({ type: ActionType.ADD_ADDITION_CART, payload: cart })
    },
    calculateShippingCart: (price) => {
      dispatch({
        type: ActionType.CALCULATE_SHIPPING_CART,
        payload: {
          price,
        },
      })
    },
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default Provider
