import React from "react"
import { Card } from "../../components"
import ListItem from "../../components/ListItem"

const MainPage: React.FC = (): React.ReactElement => {
  return (
    <div>
      <div className="bg-black mb-14" style={{ width: "1196px", height: "409px" }}>
        Carosal
      </div>
      <div>
        <Card title="สินค้าขายดี" children={<ListItem />} />
      </div>
      <div>
        <Card title="สินค้าแนะนำ" children={<ListItem />} />
      </div>
    </div>
  )
}

export default MainPage
