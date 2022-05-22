import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartIcon, CheckIcon, DescriptionIcon, FavoriteIcon } from "../../assets/icon"
import { CartContext } from "../../context/cartContext"
import Button from "../Button"
import Rateing from "../Rateing"

interface IListItemCardContent {
  id: number
  image: string
  name: string
  originPrice: string
  discountPrice: string
  onChange(id: any): void
  isOverlay: boolean
}

const ListItemCardContent: React.FC<IListItemCardContent> = (props) => {
  const { id, image, name, originPrice, discountPrice, isOverlay } = props
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext) as any
  const handleAddToCart = (cartItem: any) => {
    addToCart(cartItem)
  }
  return (
    <div onClick={() => navigate(`/product/detail/${id}`)}>
      {isOverlay && (
        <>
          <div className="z-50 absolute left-48 top-5 " >
            <FavoriteIcon />
          </div>
          <div className="z-50 absolute left-48 top-14">
            <DescriptionIcon />
          </div>
          <Button
            varient="outline"
            width="160px"
            height="34px"
            className="z-50 absolute top-32 left-9 font-poppins" 
            onClick={(e) => {
              e.stopPropagation()
              handleAddToCart({
                id,
                name,
                image,
                originPrice,
                discountPrice,
              })
            }}
          >
            <div className="flex items-center justify-center">
            <CartIcon color="#0156FF" />
            Add To Card
            </div>
          </Button>
        </>
      )}
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
    </div>
  )
}

export default ListItemCardContent
