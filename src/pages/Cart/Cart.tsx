import React from "react"
import styled from "@emotion/styled"
import { Button, CartTable } from "../../components"

const OrderSummaryStyled = styled.div`
  background: #f5f9ff;
  padding-top: 17.51px;

  .title {
    margin-left: 24px;
  }
`

const Cart: React.FC = (): React.ReactElement => {
  return (
    <div>
      <p className="font-kanit mt-14 font-semibold text-3xl">ตระกร้าสินค้า</p>
      <div className="flex">
        <div className="flex-auto w-4/6">
          <CartTable />
          <div className="mt-6 flex">
            <Button
              varient="outline"
              className="mr-3 font-kanit text-sm"
              width="200px"
              height="37px"
              dark
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
              <Button block>ไปชำระเงิน</Button>
            </div>
          </OrderSummaryStyled>
        </div>
      </div>
    </div>
  )
}

export default Cart
