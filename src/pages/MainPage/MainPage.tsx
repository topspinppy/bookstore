import React, { useContext } from "react"
import { Card, Carousel } from "../../components"
import ListItem from "../../components/ListItem"
import { CartContext } from "../../context/cartContext"

const MainPage: React.FC = (): React.ReactElement => {
  const { product } = useContext(CartContext) as any
  return (
    <div>
      <div className="mb-14 z-0">
        <Carousel>
          {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
          <div className="z-0" style={{ width: 1196, height: 409, background: "#C4C4C4" }}>
            slide 0
          </div>
          <div style={{ width: 1196, height: 409, background: "#C4C4C4" }}>
            slide 1
          </div>
        </Carousel>
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
