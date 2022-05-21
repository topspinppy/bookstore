import { CheckIcon } from "../../assets/icon"
import Rateing from "../Rateing"

import styled from "@emotion/styled"

const ListContainer = styled.div`
  width: 230.16px;
  height: 301px;
  cursor: pointer;
  position: relative;
  .overlay {
    position: absolute;
    opacity: 0;
    display: none;
    background: white;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    width: 234.73px;
    height: 355px;
  }
  &&:hover .overlay {
    display: block;
    opacity: 1;
  }
`
interface IListItemCard {
  id: number
  image: string
  name: string
  originPrice: string
  discountPrice: string
  key?: number
  onChange(value: any): void
}

const ListItemCard: React.FC<IListItemCard> = (props) => {
  const { id, image, name, originPrice, discountPrice, onChange } = props
  const cardContent = (isOverlay = false) => {
    return (
      <>
        { isOverlay && <div onClick={() => onChange(id)}>Add To Card</div> }
        <div
          className="flex items-center ml-6 text-xs pt-2 pl-2 pb-2 font-kanit"
          style={{ color: "#78A962" }}
        >
          <CheckIcon />
          <span className="ml-1">มีสินค้า</span>
        </div>
        <div className="ml-11 mr-11 mt-2">
          <img src={image} width="150px" height="150px" alt="" />
        </div>
        <div className="ml-7 flex items-center" style={{ marginTop: "10px" }}>
          <div className="mr-2">
            <Rateing />
          </div>
          <span
            className="text-xs font-normal font-poppins"
            style={{ color: "#8C8C8C" }}
          >
            Reviews (4)
          </span>
        </div>
        <div className="ml-7 text-xs mt-1 font-kanit">{name}</div>
        <div className="flex flex-col ml-7 mr-7 mt-3">
          <span className="text-sm line-through">THB{originPrice}</span>
          <span className="text-lg font-semibold">THB{discountPrice}</span>
        </div>
      </>
    )
  }
  return (
    <>
      <ListContainer>
        <div className="overlay">{cardContent(true)}</div>
        <>
          {cardContent()}
        </>
      </ListContainer>
    </>
  )
}

export default ListItemCard
