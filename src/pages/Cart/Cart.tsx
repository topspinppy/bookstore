import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Button, CartTable } from "../../components"
import { CartContext } from "../../context/cartContext"
import OrderSummary from "./OrderSummary"

const Cart: React.FC = (): React.ReactElement => {
  const navigate = useNavigate()
  const { cart, addAdditionCart } = useContext(CartContext) as any
  return (
    <div>
      <p className="font-kanit mt-14 font-semibold text-3xl">ตระกร้าสินค้า</p>
      <div className="flex">
        <div className="flex-auto w-4/6">
          <CartTable
            cart={cart}
            onChangeCart={(total, value) => addAdditionCart({ total, value })}
          />
          <div className="mt-6 flex">
            <Button
              varient="outline"
              className="mr-3 font-kanit text-sm"
              width="200px"
              height="37px"
              dark
              onClick={() => navigate("/")}
            >
              ซื้อสินค้าต่อไป
            </Button>
            <Button
              varient="primary"
              className="mr-3 font-kanit text-sm"
              width="200px"
              height="37px"
              dark
            >
              ล้างตระกร้าสินค้า
            </Button>
          </div>
        </div>
        <div className="flex-auto w-1/5">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Cart
