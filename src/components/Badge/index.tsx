import styled from '@emotion/styled'

const BadgeContainer = styled.div`
  position: relative;
`
const SupStyled = styled.sup`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
`

interface IBadgeProps {
  children: React.ReactNode
  count?: number
}

const Badge: React.FC<IBadgeProps> = (props) => {
  const { children, count = 0 } = props
  return (
    <BadgeContainer>
      <div className='bg-black'>
        <SupStyled>{count}</SupStyled>
      </div>
      {children}
    </BadgeContainer>
  )
}

export default Badge
