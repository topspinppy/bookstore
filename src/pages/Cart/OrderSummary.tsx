import styled from "@emotion/styled"
import { useNavigate } from "react-router-dom"

import { Button } from "../../components"

const OrderSummaryStyled = styled.div`
  background: #f5f9ff;
  padding-top: 17.51px;

  .title {
    margin-left: 24px;
  }
`


const OrderSummary: React.FC = () => {
  const navigate = useNavigate()
  return (
    <OrderSummaryStyled className="font-kanit">
      <p className="title font-kanit text-2xl font-semibold mb-6">
        สรุปคำสั่งซื้อ
      </p>

      <div className="ml-6 mr-6 font-semibold">
        <div className="flex justify-between mb-4">
          <span>ยอดรวม</span>
          <span>THB499.00</span>
        </div>
        <div className="flex justify-between">
          <span>ค่าส่ง</span>
          <span>THB1.00</span>
        </div>
      </div>
      <hr className="ml-6 mr-6 mb-6 mt-6" />
      <div className="ml-6 mr-6 font-semibold mb-6">
        <div className="flex justify-between mb-4">
          <span>ยอดรวม</span>
          <span>THB499.00</span>
        </div>
      </div>
      <div className="ml-6 mr-6 pb-10">
        <Button block onClick={() => navigate('/payment')}>ไปชำระเงิน</Button>
      </div>
    </OrderSummaryStyled>
  )
}

export default OrderSummary
