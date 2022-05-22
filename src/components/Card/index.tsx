import classNames from "classnames"
import React from "react"

interface ICardProps {
  children: React.ReactNode
  title: string
  extra?: React.ReactNode | string
  mini?: boolean
}
const Card: React.FC<ICardProps> = (props): React.ReactElement => {
  const { title, children, extra, mini } = props
  return (
    <div style={{ width: !mini ? "103%" : "100%" }} className="pr-12">
      <div className="flex items-center mb-3 justify-between">
        <div
          className={classNames("font-kanit w-full", {
            "text-xl": !mini,
            "text-sm border-b-2 pb-3 font-semibold": mini,
          })}
        >
          {title}
        </div>
        <div className="w-40">{extra}</div>
      </div>
      <div className="mb-10">
        {children}
      </div>
    </div>
  )
}

export default Card
