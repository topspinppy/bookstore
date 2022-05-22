import React, { useContext } from "react"
import { Card } from "../../components"
import ListItem from "../../components/ListItem"
import { CartContext } from "../../context/cartContext"

const MainPage: React.FC = (): React.ReactElement => {
  const { product } = useContext(CartContext) as any
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
              items={product || []}
            />
          }
        />
      </div>
      <div>
        <Card
          title="สินค้าแนะนำ"
          children={
            <ListItem
              items={product || []}
            />
          }
        />
      </div>
    </div>
  )
}

export default MainPage
