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
          extra={
            <span className="font-kanit underline font-normal text-sm flex justify-end">
              ดูสินค้าขายดีทั้งหมด
            </span>
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
          extra={
            <span className="font-kanit underline font-normal text-sm flex justify-end">
              ดูสินค้าแนะนำทั้งหมด
            </span>
          }
        />
      </div>
    </div>
  )
}

export default MainPage
