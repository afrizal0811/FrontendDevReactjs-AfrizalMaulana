import { Checkbox } from 'antd'
import React from 'react'
import './styles.css'
const AntdCheckbox = (props) => {
  const { title } = props
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }
  return (
    <Checkbox
      className='checkbox'
      onChange={onChange}
    >
      <span>{title}</span>
    </Checkbox>
  )
}

export default AntdCheckbox
