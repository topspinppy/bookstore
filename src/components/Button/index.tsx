import styled from "@emotion/styled"

const template = {
  primary: '#0156FF',
  warning: '#F2994A',
  primaryDark: '#000000',
  white: '#FFFFFF'
}
interface IButtonProps {
  varient?: "outline" | "primary" | "warning" | "link",
  children: React.ReactNode,
  className?: string,
  block?: boolean,
  dark?: boolean,
  width?: string,
  height?: string,
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>["onClick"],
}

const ButtonStyled = styled.button<IButtonProps>`
  ${({ block }) => block === true && `
    width: 100% !important;
    height: 50px;
  ` }
  ${({ varient, dark, width, height }) => {
    if (varient === 'primary') {
      return `
        ${dark ? `
          color: ${template.white};
          background: ${template.primaryDark};
        ` : `
          color: ${template.white};
          background: ${template.primary};
        `} 
        width: ${ width ? width : '209px'};
        height: ${ height ? height : '50px'};
        border-radius: 50px;
      `
    }
    if (varient === 'outline') {
      return `
        ${dark ? `
          color: ${template.primaryDark};
          border: 2px solid ${template.primaryDark};
        ` : `
          color: ${template.primary};
          border: 2px solid ${template.primary};
        `} 
        width: ${ width ? width : '209px'};
        height: ${ height ? height : '50px'};
        border-radius: 50px;
      `
    }
    if (varient === 'warning') {
      return `
        color: ${template.white};
        background: ${template.warning};
        width: ${ width ? width : '209px'};
        height: ${ height ? height : '50px'};
        border-radius: 50px;
      `
    }

    if (varient === 'link') {
      return `
        color: ${template.primary};
        border-color: transparent;
        background: 0 0;
        box-shadow: none;
      `
    }
  }}
`

const Button: React.FC<IButtonProps> = (props) => {
  const { varient = "primary", children } = props
  return (
    <>
      <ButtonStyled varient={varient} {...props}>{children}</ButtonStyled>
    </>
  )
}

export default Button
