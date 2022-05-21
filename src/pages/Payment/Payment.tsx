import { Card } from "../../components"
import OrderSummary from "../Cart/OrderSummary"
import CourierForm from "./CourierForm"
import PaymentTypeForm from "./PaymentTypeForm"
import AddressForm from "./AddressForm"

const Payment: React.FC = () => {
  return (
    <div>
      <p className="font-kanit mt-14 font-semibold text-3xl">ชำระเงิน</p>
      <div className="flex">
        <div className="flex-auto w-4/6">
          <Card title="ที่อยู่ในการจัดส่ง" children={<AddressForm />} mini />
          <Card title="เลือกขนส่ง" children={<CourierForm />} mini />
          <Card title="วิธีชำระเงิน" children={<PaymentTypeForm />} mini />
        </div>
        <div className="flex-auto w-1/5">
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

export default Payment
