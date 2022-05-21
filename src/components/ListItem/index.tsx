import { useState } from "react"
import ReactSimplyCarousel from "react-simply-carousel"
import { LeftArrow, RightArrow } from "../../assets/icon"
import ListItemCard from "./ListItemCard"

interface IListItemProps {
  items: Array<any>
  onChange?(value: any): void
}

const ListItem: React.FC<IListItemProps> = ({ items, onChange }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  
  const renderCardList = () => {
    return items.map((list, index) => (
      <ListItemCard
        {...list}
        key={index}
        onChange={(value) => onChange && onChange(value)}
      />
    ))
  }
  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      innerProps={{
        style: {
          zIndex: 0,
        },
      }}
      containerProps={{
        style: {
          overflow: "inherit",
          zIndex: 0,
        },
      }}
      forwardBtnProps={{
        style: {
          zIndex: "1",
        },
        children: <RightArrow />,
      }}
      backwardBtnProps={{
        style: {
          zIndex: "1",
        },
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
