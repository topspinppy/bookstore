import styled from "@emotion/styled"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalShippingCost] = useState(0)
  const { cart } = useContext(CartContext) as any

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
        {totalShippingCost !== 0 && (
          <div className="flex justify-between">
            <span>ค่าส่ง</span>
            <span>THB{totalShippingCost}.00</span>
          </div>
        )}
      </div>
      <hr className="ml-6 mr-6 mb-6 mt-6" />
      <div className="ml-6 mr-6 font-semibold mb-6">
        <div className="flex justify-between mb-4">
          <span>ยอดรวม</span>
          <span>THB{totalPrice + totalShippingCost}.00</span>
        </div>
      </div>
      <div className="ml-6 mr-6 pb-10">
        <Button block onClick={() => navigate("/payment")}>
          ไปชำระเงิน
        </Button>
      </div>
    </OrderSummaryStyled>
  )
}

export default OrderSummary
