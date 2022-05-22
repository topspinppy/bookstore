// @ts-ignore

import { ActionType } from "./action"
import { product as productMock } from "./product"

export const initialState = {
  product: productMock,
  cart: [],
  shippingPrice: 0,
}

export function reducer(state: any, action: any) {
  const { type, payload } = action
  switch (type) {
    case ActionType.SET_CART:
      const id = payload.id
      const isOld = state.cart.map((product: any) => product.id).includes(id)
      let cartItems = null
      if (isOld) {
        const productItems = state.cart.map((product: any) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + 1,
            }
          }
          return product
        })
        cartItems = [...productItems]
      } else {
        cartItems = [...state.cart, { ...payload, quantity: 1 }]
      }
      console.log("SET_CART")
      return { ...state, cart: cartItems }
    case ActionType.ADD_ADDITION_CART:
      const currentId = payload.value.id
      const currentProduct = state.cart.find(
        (cart: any) => cart.id === currentId
      )
      const newCurrentProduct = { ...currentProduct, quantity: payload.total }
      const productItems = state.cart.map((product: any) => {
        if (product.id === currentId) {
          return newCurrentProduct
        }
        return product
      })
      return { ...state.cart, cart: productItems }
    case ActionType.CALCULATE_SHIPPING_CART:
      const price = payload
      return { ...state, shippingPrice: price }
    case ActionType.CLEAR_CART:
      return { ...state, cart: [] }
    default:
      return state
  }
}
