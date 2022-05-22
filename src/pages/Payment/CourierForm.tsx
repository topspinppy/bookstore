import { SelectList } from "../../components"

interface ICourierFormProps {
  onChange?(value: string | number, extra: any): void
}

const CourierForm: React.FC<ICourierFormProps> = ({ onChange }) => {
  return (
    <div className="font-kanit">
      <SelectList
        items={[
          {
            value: '1',
            extra: 0,
            children: (
              <div className="w-full flex items-center justify-between pr-5 font-poppins">
                <span>Free Shipping</span>
                <span className="font-semibold">THB 0.00</span>
              </div>
            ),
          },
          {
            value: '2',
            extra: 40.00,
            children: (
              <div className="w-full flex items-center justify-between pr-5  font-poppins font-semibold">
                <img src={require('../../assets/images/kerry.png')} alt="" width="159px" height="33px" />
                <span>THB 40.00</span>
              </div>
            ),
          },
        ]}
        onChange={(data, extra) => {
          onChange && onChange(data, extra)
        }}
      />
    </div>
  )
}

export default CourierForm
