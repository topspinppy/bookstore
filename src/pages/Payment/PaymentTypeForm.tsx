import { SelectList } from "../../components"

const PaymentTypeForm: React.FC = () => {
  return (
    <div className="font-poppins">
      <SelectList 
        items={[
          {
            value: '1',
            children: (
              <div className="flex items-center">
                <img src={require('../../assets/images/cash.png')} alt="" width="30px" height="30px" className="mr-4" />
                <span>Cash</span>
              </div>
            )
          },
          {
            value: '2',
            children: (
              <div className="flex items-center">
                <img src={require('../../assets/images/card.png')} alt="" width="30px" height="30px" className="mr-4" />
                <span>Credit/Debit</span>
              </div>
            )
          }
        ]}
      />
    </div>
  )
}

export default PaymentTypeForm
