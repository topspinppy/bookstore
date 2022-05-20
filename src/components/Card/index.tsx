import React from 'react'

interface ICardProps {
  children: React.ReactNode
  title: string,
  extra?: React.ReactNode | string
}
const Card: React.FC<ICardProps> = (props): React.ReactElement => {
  const { title, children, extra } = props
  return (
    <div style={{ width: '103%' }}>
      <div className='flex items-center mb-3 justify-between'>
        <div className="font-kanit text-xl">{title}</div>
        <div>{extra}</div>
      </div>
      {children}
    </div>
  )
}

export default Card
