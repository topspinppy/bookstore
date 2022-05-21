import styled from "@emotion/styled"
import React, { useState } from "react"

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 15px;
  min-width: 15px;
  height: 15px;
  border: 2px solid #004CFF;
  margin-right: 23px;
`

const Circle = styled.div<{ isActive: boolean }>`
  background: ${({ isActive }) => isActive ? `#004CFF`: `white` };
  border-radius: 50%;
  width: 7px;
  height: 7px;
`

const ItemContainer = styled.div`
  border: 1px solid #ebedf4;
  border-radius: 5px;
  margin-bottom: 10px;
`

interface IItemsProps {
  value: string | number,
  children: React.ReactNode
}


interface ISelectListProps {
  items: Array<IItemsProps>
  onChange?(data: string | number): void;
}

const SelectList: React.FC<ISelectListProps> = ({ items, onChange }) => {
  const [tempIndex, setTempIndex] = useState<number | undefined>(undefined);

  const itemsList = items.map((item, index: number) => {
    const isActive = tempIndex === index
    return (
      <ItemContainer 
        key={index} 
        className="flex items-center pt-10 pb-10 pl-7 text-lg font-poppins cursor-pointer"
        onClick={() => {
          setTempIndex(index)
          onChange && onChange(item?.value)
        }}
      >
        <CircleWrapper>
          <Circle isActive={isActive} />
        </CircleWrapper>
        {item.children}
      </ItemContainer>
    )
  })
  return (
    <div>
      {itemsList}
    </div>
  )
}

export default SelectList
