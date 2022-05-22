import styled from "@emotion/styled"
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { LockIcon } from "../../assets/icon"

import { Button } from "../../components"
import { CartContext } from "../../context/cartContext"

const OrderSummaryStyled = styled.div`
  background: #f5f9ff;
  padding-top: 17.51px;

  .title {
    margin-left: 24px;
  }
`

const OrderSummary: React.FC = () => {
  const navigate = useNavigate()
  const params = useLocation()
  const [totalPrice, setTotalPrice] = useState(0)
  const { cart, shippingPrice } = useContext(CartContext) as any
  useEffect(() => {
    const total = cart.reduce((previousValue: any, currentValue: any) => {
      const price = currentValue.discountPrice
        ? Number(currentValue.discountPrice)
        : Number(currentValue.originPrice)
      const quantity = Number(currentValue.quantity)
      return +previousValue + price * quantity
    }, 0)
    setTotalPrice(total)
  }, [cart])

  return (
    <OrderSummaryStyled className="font-kanit">
      <p className="title font-kanit text-2xl font-semibold mb-6">
        สรุปคำสั่งซื้อ
      </p>

      <div className="ml-6 mr-6 font-semibold">
        <div className="flex justify-between mb-4">
          <span>ยอดรวม</span>
          <span>THB{totalPrice}.00</span>
        </div>
        <div className="flex justify-between">
          <span>ค่าส่ง</span>
          <span>THB{shippingPrice?.price || 0}.00</span>
        </div>
      </div>
      <hr className="ml-6 mr-6 mb-6 mt-6" />
      <div className="ml-6 mr-6 font-semibold mb-6">
        <div className="flex justify-between mb-4">
          <span>ยอดรวม</span>
          <span>THB{(totalPrice + shippingPrice?.price) || 0}.00</span>
        </div>
      </div>
      <div className="ml-6 mr-6 pb-10 text-base font-bold">
        <Button block onClick={() => navigate("/payment")}>
          {params.pathname === "/payment" ? (
            <div className="flex justify-center items-center">
              <div className="mr-2">
                <LockIcon />
              </div>
              ชำระเงิน
            </div>
          ) : `ไปชำระเงิน`}
        </Button>
      </div>
    </OrderSummaryStyled>
  )
}

export default OrderSummary
