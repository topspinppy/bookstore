import { useEffect, useState } from "react"
import { Input, Select } from "../../components"

type AddressFormState = {
  name: string,
  surname: string,
  country: string,
  address: string,
  subdistrict: string,
  district: string,
  province: string,
  zipCode: string,
  phone: string,
}

interface IAddressForm {
  onChange(address: object): void
}

const AddressForm: React.FC<IAddressForm> = ({ onChange }) => {
  const [address, setAddress] = useState<AddressFormState>({
    name: '',
    surname: '',
    country: '',
    address: '',
    subdistrict: '',
    district: '',
    province: '',
    zipCode: '',
    phone: '',
  })

  const handleSetAddress = (key: string, value: string) => {
    setAddress({ ...address, [key]: value })
  }

  useEffect(() => {
    onChange && onChange(address)
  }, [address, onChange])

  return (
    <div className="font-kanit">
      <div className="flex mb-2">
        <div className="flex-1 w-64 mr-2">
          <Input title="ชื่อ" onChange={(value) => handleSetAddress('name', value)} />
        </div>
        <div className="flex-1 w-64">
          <Input title="นามสกุล" onChange={(value) => handleSetAddress('surname', value)} />
        </div>
      </div>
      <div className="mb-2">
        <Select title="ประเภศ" onChange={(value) => handleSetAddress('country', value)} />
      </div>
      <div className="mb-2">
        <Input title="ที่อยู่ (บ้านเลขที่ / หมู่บ้าน / หมู่ที่ / ซอย / ถนน)" onChange={(value) => handleSetAddress('address', value)} />
      </div>
      <div className="flex mb-2">
        <div className="flex-1 w-64 mr-2">
          <Input title="แขวง/ตำบล" onChange={(value) => handleSetAddress('district', value)} />
        </div>
        <div className="flex-1 w-64">
          <Input  title="เขต/อำเภอ" onChange={(value) => handleSetAddress('subdistrict', value)} />
        </div>
      </div>
      <div className="flex mb-2">
        <div className="flex-1 w-64 mr-2">
          <Input title="จังหวัด" onChange={(value) => handleSetAddress('province', value)} />
        </div>
        <div className="flex-1 w-64">
          <Input title="รหัสไปรษณีย์"  onChange={(value) => handleSetAddress('zipCode', value)} />
        </div>
      </div>
      <div className="mb-2">
        <Input title="เบอร์โทรศัพท์" onChange={(value) => handleSetAddress('phone', value)} />
      </div>
    </div>
  )
}

export default AddressForm