import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { itemConvert } from './help'

const AntdSelect = (props) => {
  const { datas, isClear, setFilter, setIsClear, title } = props || null

  const [items, setItems] = useState([])
  const [option, setOption] = useState('')
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setItems(itemConvert(datas))
    if (isClear) {
      setIsSelected(false)
      setFilter(null)
    }
    setIsClear(false)
  }, [datas, isClear, setIsClear, setFilter])

  const handleChange = (value) => {
    setIsSelected(value)
    setOption(value)
    setFilter(value)
  }

  return (
    <Select
      onChange={handleChange}
      options={items}
      style={{ width: 110 }}
      value={isSelected ? option : title}
    />
  )
}

export default AntdSelect
