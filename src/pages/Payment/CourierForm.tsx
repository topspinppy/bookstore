import { SelectList } from "../../components"

const CourierForm = () => {
  return (
    <div className="font-kanit">
      <SelectList
        items={[
          {
            value: '1',
            children: (
              <div className="w-full flex items-center justify-between pr-5 font-poppins">
                <span>Free Shipping</span>
                <span className="font-semibold">THB 0.00</span>
              </div>
            ),
          },
          {
            value: '2',
            children: (
              <div className="w-full flex items-center justify-between pr-5  font-poppins font-semibold">
                <img src={require('../../assets/images/kerry.png')} alt="" width="159px" height="33px" />
                <span>THB 40.00</span>
              </div>
            ),
          },
        ]}
        onChange={(data) => {
          console.log('courier Form -->', data)
        }}
      />
    </div>
  )
}

export default CourierForm
