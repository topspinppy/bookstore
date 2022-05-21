import { Input, Select } from "../../components"


const AddressForm = () => {
  return (
    <div className="font-kanit">
      <div className="flex mb-2">
        <div className="flex-1 w-64 mr-2">
          <Input title="ชื่อ"/>
        </div>
        <div className="flex-1 w-64">
          <Input title="นามสกุล" />
        </div>
      </div>
      <div className="mb-2">
        <Select />
      </div>
      <div className="mb-2">
        <Input title="ที่อยู่ (บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)"/>
      </div>
      <div className="flex mb-2">
        <div className="flex-1 w-64 mr-2">
          <Input title="แขวง/ตำบล" />
        </div>
        <div className="flex-1 w-64">
          <Input  title="เขต/อำเภอ" />
        </div>
      </div>
      <div className="flex mb-2">
        <div className="flex-1 w-64 mr-2">
          <Input title="จังหวัด" />
        </div>
        <div className="flex-1 w-64">
          <Input title="รหัสไปรษณีย์" />
        </div>
      </div>
      <div className="mb-2">
        <Input title="เบอร์โทรศัพท์"/>
      </div>
    </div>
  )
}

export default AddressForm