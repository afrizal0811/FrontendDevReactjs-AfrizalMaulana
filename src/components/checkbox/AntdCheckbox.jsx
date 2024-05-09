import { Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import './styles.css'

const AntdCheckbox = (props) => {
  const { isClear, setIsClear, setIsOpenFilter, title } = props
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
      checked={isSelected}
      className='checkbox'
      onChange={(e) => handleClick(e)}
    >
      <span>{title}</span>
    </Checkbox>
  )
}

export default AntdCheckbox
