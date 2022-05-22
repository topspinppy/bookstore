import { useState } from "react"
import classnames from 'classnames'

interface IPreviewProductProps {
  images: Array<string>
}

const PreviewProduct: React.FC<IPreviewProductProps> = (props) => {
  const { images } = props
  const [mainImage, setMainImages] = useState(images[0])
  const renderPreviewImage = () => {
    return images.map((image: any, index: number) => (
      <img 
        key={index}
        src={image} 
        alt="Preview" 
        width="127px" 
        height="192px" 
        className={classnames('mr-6','cursor-pointer', { 'opacity-50': mainImage !== image })}
        onClick={() => setMainImages(image)}
      />
    ))
  }
  return (
    <div>
      <img src={mainImage} alt="Main" width="394px" height="580.52px" />

      <div className="mt-3 flex mb-3">
        {renderPreviewImage()}
      </div>
    </div>
  )
}

export default PreviewProduct