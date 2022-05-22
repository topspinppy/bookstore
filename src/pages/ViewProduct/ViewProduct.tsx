import React, { useContext } from "react"
import { useState } from "react";
import { useParams } from "react-router-dom";

import { WhiteHeartIcon } from "../../assets/icon"
import SocialLogo from "../../assets/logo/SocialLogo"
import { Button, Card, InputNumber, ListItem, Tab } from "../../components"
import { CartContext } from "../../context/cartContext";
import PreviewProduct from "./PreviewProduct"

const ViewProduct: React.FC = (): React.ReactElement => {
  const params = useParams()
  const [quantity, setQuantity] = useState(0) as any
  const { product, addToCart } = useContext(CartContext) as any
  const productDetail = product.find((product: any) => product.id === Number(params.id))

  const handleAddCard = (productDetail: any) => {
    if (quantity > 0) {
      addToCart({ ...productDetail, quantity })
    }
  }
  return (
    <div className="flex flex-col">
      <div className="flex mt-14">
        <div className="flex-auto w-9">
          <PreviewProduct
            images={[
              productDetail?.previewImage?.cover,
              productDetail?.previewImage?.backCover,
            ]}
          />
        </div>
        <div className="flex-auto w-64">
          <div className="mt-5">
            <div>
              <p className="text-4xl font-kanit">
                {productDetail?.name}
              </p>

              <div className="mt-5 font-kanit">
                <ul>
                  <li>ผู้เขียน : {productDetail?.author}</li>
                  <li>สำนักพิมพ์ : {productDetail?.press}</li>
                  <li>หมวดหมู่ : {productDetail?.bookType}</li>
                  <li>ประเภทของสินค้า : {productDetail?.productType}</li>
                  <li>บาร์โค้ด : {productDetail?.barcode}</li>
                </ul>
              </div>

              <div className="mt-20 flex items-center">
                <span className="text-2xl mr-4 font-kanit">ราคา</span>
                <span className="text-4xl font-semibold mr-3">THB{productDetail?.discountPrice}</span>
                <span className="font-semibold text-neutral-500 line-through">
                  THB{productDetail?.originPrice}
                </span>
              </div>
            </div>

            <div className="mt-16 flex font-poppins">
              <InputNumber 
                width="102px" 
                className="mr-9" 
                defaultValue={0}
                onChange={(e) => {
                  setQuantity(e.currentTarget.value)
                }}
              />
              <Button varient="primary" className="mr-10" onClick={() => handleAddCard(productDetail)}>
                Add
              </Button>
              <Button varient="warning">
                <div className="flex justify-evenly">
                  <WhiteHeartIcon />
                  <span>Wishlist</span>
                </div>
              </Button>
            </div>
            <div className="font-kanit flex items-center mt-10">
              <span className="mr-7">แชร์ :</span>
              <SocialLogo />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Tab />
      </div>

      <div className="mt-32 mb-32">
        <Card 
          title="สินค้าที่เกี่ยวข้อง" 
          extra="ดูสินค้าทั้งหมด" 
          children={(
            <ListItem 
              items={product}
            />
          )} 
        />
      </div>
    </div>
  )
}

export default ViewProduct
