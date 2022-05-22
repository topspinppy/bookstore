import { Card } from "../../components"
import OrderSummary from "../Cart/OrderSummary"
import CourierForm from "./CourierForm"
import PaymentTypeForm from "./PaymentTypeForm"
import AddressForm from "./AddressForm"
import { useContext } from "react"
import { CartContext } from "../../context/cartContext"

const Payment: React.FC = () => {
  const { calculateShippingCart } = useContext(CartContext) as any

  return (
    <div>
      <p className="font-kanit mt-14 font-semibold text-3xl">ชำระเงิน</p>
      <div className="flex">
        <div className="flex-auto w-4/6">
          <Card 
            title="ที่อยู่ในการจัดส่ง" 
            children={(
              <AddressForm onChange={(value) => console.log(value)}/>
            )} 
            mini 
          />
          <Card 
            title="เลือกขนส่ง" 
            children={(
              <CourierForm 
                onChange={(value, extra) => {
                  calculateShippingCart(extra)
                }}
              />
            )} 
            mini 
          />
          <Card 
            title="วิธีชำระเงิน" 
            children={(
              <PaymentTypeForm 
                onChange={(value) => console.log(value)}
              />
            )} 
            mini 
          />
        </div>
        <div className="flex-auto w-1/5">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Payment
