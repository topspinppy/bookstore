import { useState } from "react"
import ReactSimplyCarousel from "react-simply-carousel"
import { LeftArrow, RightArrow } from "../../assets/icon"
import ListItemCard from "./ListItemCard"

const listItemsBookStoreMock = [
  {
    id: 1,
    image: require("../../assets/images/book.png"),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    id: 2,
    image: require("../../assets/images/book.png"),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    id: 3,
    image: require("../../assets/images/book.png"),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    id: 4,
    image: require("../../assets/images/book.png"),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    id: 5,
    image: require("../../assets/images/book.png"),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    id: 6,
    image: require("../../assets/images/book.png"),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
]


interface IListItemProps {}

const ListItem: React.FC<IListItemProps> = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const renderCardList = () => {
    return listItemsBookStoreMock.map((list, index) => (
      <ListItemCard {...list} key={index} />
    ))
  }
  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        children: <RightArrow />,
      }}
      backwardBtnProps={{
        children: <LeftArrow />,
      }}
      responsiveProps={[
        {
          itemsToShow: 5,
          minWidth: 768,
        },
      ]}
      speed={400}
      easing="linear"
    >
      {renderCardList()}
    </ReactSimplyCarousel>
  )
}

export default ListItem
