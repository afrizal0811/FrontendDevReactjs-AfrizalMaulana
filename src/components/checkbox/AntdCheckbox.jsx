import { Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import './styles.css'
const AntdCheckbox = (props) => {
  const { title, setIsOpenFilter, isClear, setIsClear } = props
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (isClear) {
      setIsSelected(false)
      setIsOpenFilter(null)
    }
    setIsClear(false)
  }, [isClear, setIsClear, setIsOpenFilter])

  const handleClick = (e) => {
    let value = e.target.checked
    if (value === false) value = null
    setIsOpenFilter(value)
    setIsSelected(!isSelected)
  }
  
  return (
    <Checkbox
      className='checkbox'
      onChange={(e) => handleClick(e)}
      checked={isSelected}
    >
      <span>{title}</span>
    </Checkbox>
  )
}

export default AntdCheckbox
