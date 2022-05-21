import React from "react"
import { WhiteHeartIcon } from "../../assets/icon"
import SocialLogo from "../../assets/logo/SocialLogo"
import { Button } from "../../components"
import PreviewProduct from "./PreviewProduct"

const ViewProduct: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className="flex mt-14">
        <div className="flex-auto w-9">
          <PreviewProduct
            images={[
              "https://images-se-ed.com/ws/Storage/Originals/978616/184/9786161840488L.jpg?h=db11440ee68277bdf8468bc65e7f7c11",
              "https://images-se-ed.com/ws/Storage/Illustration/978616/184/9786161840488-01.jpg?h=4ed8d71b53a43515f6cfcf67e30c81e0",
            ]}
          />
        </div>
        <div className="flex-auto w-64">
          <div className="mt-5">
            <div>
              <p className="text-4xl font-kanit">
                รสชาติของผลไม้ที่ยังไม่สุกงอม
              </p>

              <div className="mt-5 font-kanit">
                <ul>
                  <li>ผู้เขียน : โซนัมจู</li>
                  <li>สำนักพิมพ์ : Piccolo</li>
                  <li>หมวดหมู่ : วรรณกรรม เรื่องสั้น</li>
                  <li>ประเภทของสินค้า : Books</li>
                  <li>บาร์โค้ด : 9786161840488</li>
                </ul>
              </div>

              <div className="mt-20 flex items-center">
                <span className="text-2xl mr-4 font-kanit">ราคา</span>
                <span className="text-4xl font-semibold mr-3">THB499.00</span>
                <span className="font-semibold text-neutral-500 line-through">
                  THB599.00
                </span>
              </div>
            </div>

            <div className="mt-16 flex font-poppins">
              <Button varient="primary" className="mr-10">Add</Button>
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
    </>
  )
}

export default ViewProduct
