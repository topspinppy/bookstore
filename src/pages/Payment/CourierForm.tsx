import { SelectList } from "../../components"

const CourierForm = () => {
  return (
    <div className="font-kanit">
      <SelectList
        items={[
          {
            value: '1',
            children: <div>Free Shipping</div>,
          },
          {
            value: '2',
            children: <div>Kerry Express</div>,
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
