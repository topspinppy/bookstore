import { useState } from "react"
import styled from '@emotion/styled'
import { StarEmptySymbolIcon, StarFullSymbolIcon } from "../../assets/icon"

const RateingStyled = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`

interface IRateingProps {
  className?: React.HTMLAttributes<HTMLDivElement> | string
}

const Rateing: React.FC<IRateingProps> = (props) => {
  const { className } = props
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <RateingStyled {...className}>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {index <= (hover || rating) ? <StarEmptySymbolIcon /> : <StarFullSymbolIcon />}
          </button>
        );
      })}
    </RateingStyled>
  );
}

export default Rateing
