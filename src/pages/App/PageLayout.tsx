import React, { useContext } from 'react'
import { Badge } from 'antd'
import { Popover } from 'antd'
import styled from '@emotion/styled'
import { MagnifierIcon, CartIcon } from '../../assets/icon'
import BookLogo from '../../assets/logo/BookLogo'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import CartPopover from './CartPopover'
import { CartContext } from '../../context/cartContext'

interface IPageLayoutProps {
  children: React.ReactNode
}

const HeaderStyled = styled.div`
  background: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
  padding: 20px 110px 19px 110px;
  position: sticky; 
  top: 0;
  z-index: 999;
  .wrapper-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1160px;
    margin: auto;
  }
`

const MenuStyled = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-right: 32px;
    }
  }
`

const PopOverStyled = styled(Popover)`
  .ant-popover-inner-content {
    padding: 0 !important;
    color: rgba(0,0,0,.85);
  }
`

const PageContent = styled.div`
  margin:auto;
  max-width: 1160px;
`

const PageLayout: React.FC<IPageLayoutProps> = (props): React.ReactElement => {
  const { children } = props
  const navigate = useNavigate()
  const { cart: carts } = useContext(CartContext) as any

  const Menu = () => {
    return (
      <MenuStyled className="font-kanit">
        <ul>
          <li>สินค้าใหม่</li>
          <li>สินค้าขายดี</li>
          <li>สินค้าลดราคา</li>
          <li>สินค้าแนะนำ</li>
        </ul>
      </MenuStyled>
    )
  }

  const MenuRight = () => {
    return (
      <div className="flex">
        <div className="mr-5">
          <MagnifierIcon />
        </div>
        <Badge count={carts.length ?? 0}  size="small" color="geekblue">
          <PopOverStyled content={<CartPopover />} trigger="click" placement="bottomRight">
            <Button varient="link">
              <CartIcon />
            </Button>
          </PopOverStyled>
        </Badge>
      </div>
    )
  }
  return (
    <div>
      <HeaderStyled>
        <div className='wrapper-header'>
          <div className="flex items-center">
            <Button varient='link' onClick={() => navigate('/')}>
              <BookLogo />
            </Button>
            <Menu />
          </div>
          <div>
            <MenuRight />
          </div>
        </div>
      </HeaderStyled>
      <PageContent>{children}</PageContent>
    </div>
  )
}

export default PageLayout
