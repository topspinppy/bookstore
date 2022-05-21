import styled from "@emotion/styled"

const template = {
  primary: '#0156FF',
  warning: '#F2994A',
  primaryDark: '#000000',
  white: '#FFFFFF'
}
interface IButtonProps {
  varient?: "outline" | "primary" | "warning",
  children: React.ReactNode,
  className?: string
}

const ButtonStyled = styled.button<IButtonProps>`
  ${({ varient }) => {
    if (varient === 'primary') {
      return `
        color: ${template.white};
        background: ${template.primary};
        width: 209px;
        height: 50px;
        border-radius: 50px;
      `
    }
    if (varient === 'outline') {
      return `
        color: ${template.primary};
        border: 2px solid ${template.primary};
        width: 209px;
        height: 50px;
        border-radius: 50px;
      `
    }
    if (varient === 'warning') {
      return `
        color: ${template.white};
        background: ${template.warning};
        width: 209px;
        height: 50px;
        border-radius: 50px;
      `
    }
  }}
`

const Button: React.FC<IButtonProps> = (props) => {
  const { varient = "primary", children } = props
  return (
    <div>
      <ButtonStyled varient={varient} {...props}>{children}</ButtonStyled>
    </div>
  )
}

export default Button
