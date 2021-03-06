import styled from "@emotion/styled"
import { useRef } from "react"

interface IInputNumberProps extends React.HTMLProps<HTMLInputElement> {
  width?: string,
  height?: string,
  defaultValue?: number
}

const ContainerInputNumberStyled = styled.div<{
  width?: string | undefined,
  height?: string | undefined,
}>`
  position: relative;
  input[type="number"] {
    width: ${props => props.width ? props.width : '70px'};
    height: ${props => props.height ? props.height : '50px'};
    text-align: center;
    border-radius: 6px;
    background: #EBEBEB;
    background-image: url(${require('../../assets/images/stepUpDown.png')});
    background-position: center right;
    background-size: auto;
    background-repeat: no-repeat;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    opacity: 1 !important;
    background: transparent !important;
    border-width: 0px;
    margin: 0;
    height: 34px;
    width: 23px;
    cursor: pointer;
  }

  .step {
    position: absolute;
    margin-top: -2.3rem;
    margin-left: 5rem;
  }
`

const InputNumber: React.FC<IInputNumberProps> = ({ defaultValue = 1, ...props }) => {
  const inputNumberRef = useRef() as React.MutableRefObject<HTMLInputElement>
  return (
    <ContainerInputNumberStyled width={props.width} height={props.height}>
      <input type="number" min="1" defaultValue={defaultValue} ref={inputNumberRef} {...props} />
    </ContainerInputNumberStyled>
  )
}

export default InputNumber
