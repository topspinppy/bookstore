import styled from "@emotion/styled"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { EditIcon, RemoveIcon } from "../../assets/icon"
import { Button } from "../../components"
import { CartContext } from "../../context/cartContext"

const CartPopoverStyled = styled.div`
  width: 310px;
  height: auto;
`
const CartPopover: React.FC = () => {
  const navigate = useNavigate()
  const { cart: carts } = useContext(CartContext) as any
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const total = carts.reduce((previousValue: any, currentValue: any) => {
      const price = currentValue.discountPrice
        ? Number(currentValue.discountPrice)
        : Number(currentValue.originPrice)
      const quantity = Number(currentValue.quantity)
      return +previousValue + price * quantity
    }, 0)
    setTotalPrice(total)
  }, [carts])


  const productList = () => {
    return carts.map((cart: any, index: number) => (
      <div className="flex justify-between items-center pl-6 pr-6 pt-4 pb-5" key={index}>
        <div className="text-lg font-poppins ">{cart?.quantity}x</div>
        <div className="flex">
          <div>
            <img src={cart.image} width="65px" height="65px" alt="" />
          </div>
          <div>{cart.name}</div>
        </div>
        <div className="flex flex-col">
          <Button varient="link">
            <EditIcon />
          </Button>

          <Button varient="link">
            <RemoveIcon />
          </Button>
        </div>
      </div>
    ))
  }

  return (
    <CartPopoverStyled className="font-kanit">
      <p className="font-kanit text-lg font-semibold text-center mt-6">
        ตระกร้าของฉัน
      </p>
      <span className="font-kanit mt-1 flex justify-center text-xs text-slate-400">
        {carts.length} สินค้าในตระกร้า
      </span>
      <div className="ml-8 mr-8">
        <Button
          className="font-kanit mt-4 mb-5"
          varient="outline"
          block
          width="250px"
          height="37px"
          onClick={() => navigate("/cart")}
        >
          ดูหรือแก้ไขตระกร้าของฉัน
        </Button>
      </div>
      <div className="border-t-2 border-b-2">{productList()}</div>
      <div className="mt-6 text-center">
        <div>
          <span className="text-sm mr-2">ยอดรวม</span>
          <span className="text-lg font-semibold">THB{totalPrice}.00</span>
        </div>

        <div className="mt-3 mb-5">
          <Button
            onClick={() => navigate("/payment")}
            varient="primary"
            width="250px"
            height="37px"
            className="font-semibold"
          >
            ไปชำระเงิน
          </Button>
        </div>
      </div>
    </CartPopoverStyled>
  )
}

export default CartPopover
