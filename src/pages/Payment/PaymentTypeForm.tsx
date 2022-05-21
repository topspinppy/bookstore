import { SelectList } from "../../components"

const PaymentTypeForm: React.FC = () => {
  return (
    <div className="font-poppins">
      <SelectList 
        items={[
          {
            value: '1',
            children: (
              <div> Cash </div>
            )
          },
          {
            value: '2',
            children: (
              <div> Credit/Debit </div>
            )
          }
        ]}
      />
    </div>
  )
}

export default PaymentTypeForm
