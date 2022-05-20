import { useState } from "react"
import styled from '@emotion/styled'
import ReactSimplyCarousel from "react-simply-carousel"

const listItemsBookStoreMock = [
  {
    image: require('../../assets/images/book.png'),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    image: require('../../assets/images/book.png'),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    image: require('../../assets/images/book.png'),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    image: require('../../assets/images/book.png'),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    image: require('../../assets/images/book.png'),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
  {
    image: require('../../assets/images/book.png'),
    name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
    originPrice: "599.00",
    discountPrice: "499.00",
  },
]

const ListContainer = styled.div`
  width: 234.16px;
  height: 301px;
  margin-right: 2px;
`

const ListItem: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const renderList = () => {
    return listItemsBookStoreMock.map((list) => (
      <ListContainer>
        <div className="mt-7 ml-11">
          <img src={list.image} width="150px" height="150px" />
        </div>
        <div className="ml-7 text-xs mt-8">
          {list.name}
        </div>
        <div className="flex flex-col ml-7 mr-7 mt-4">
          <span className="text-sm line-through">THB{list.originPrice}</span>
          <span className="text-lg">THB{list.discountPrice}</span>
        </div>
      </ListContainer>
    ))
  }
  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 5,
            itemsToScroll: 2,
            minWidth: 1080,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {renderList()}
      </ReactSimplyCarousel>
    </div>
  )
}

export default ListItem
