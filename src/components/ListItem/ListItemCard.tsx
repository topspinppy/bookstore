import styled from "@emotion/styled"
import ListItemCardContent from "./ListItemCardContent"

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
  const cardContent = (isOverlay = false) => {
    return (
      <>
        <ListItemCardContent isOverlay={isOverlay} {...props} />
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
