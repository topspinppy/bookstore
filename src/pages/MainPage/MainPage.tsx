import React from "react"
import { useRecoilValue } from "recoil"

import { Card } from "../../components"
import ListItem from "../../components/ListItem"
import { mockProductState } from "../../recoil/atoms/mockProductState"

const MainPage: React.FC = (): React.ReactElement => {
  const mockProduct = useRecoilValue(mockProductState)

  console.log(mockProduct)
  return (
    <div>
      <div
        className="bg-black mb-14"
        style={{ width: "1196px", height: "409px" }}
      >
        Carosal
      </div>
      <div>
        <Card
          title="สินค้าขายดี"
          children={
            <ListItem
              items={mockProduct}
            />
          }
        />
      </div>
      <div>
        <Card
          title="สินค้าแนะนำ"
          children={
            <ListItem
              items={mockProduct}
            />
          }
        />
      </div>
    </div>
  )
}

export default MainPage
