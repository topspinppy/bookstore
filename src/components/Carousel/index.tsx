import React, { useState } from "react"
import ReactSimplyCarousel from "react-simply-carousel"
import { LeftArrow, RightArrow } from "../../assets/icon"

interface ICarouselProps {
  children?: React.ReactNode
}

const Carousel: React.FC<ICarouselProps> = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        style: {
          background: '#C4C4C4'
        },
        children: <RightArrow />,
      }}
      backwardBtnProps={{
        style: {
          background: '#C4C4C4'
        },
        children: <LeftArrow />,
      }}
      responsiveProps={[
        {
          itemsToShow: 1,
          itemsToScroll: 1,
          minWidth: 768,
        },
      ]}
      speed={400}
      easing="linear"
    >
      {children}
    </ReactSimplyCarousel>
  )
}

export default Carousel
