import { Checkbox } from 'antd'
import React from 'react'
import './styles.css'
const AntdCheckbox = (props) => {
  const { title, setIsOpenFilter } = props

  const handleClick = (e) => {
    let value = e.target.checked
    if (value === false) value = null
    setIsOpenFilter(value)
  }
  return (
    <Checkbox
      className='checkbox'
      onChange={(e) => handleClick(e)}
    >
      <span>{title}</span>
    </Checkbox>
  )
}

export default AntdCheckbox
