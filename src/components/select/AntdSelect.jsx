import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { itemConvert } from './help'

const AntdSelect = (props) => {
  const { title, datas, setFilter, isClear, setIsClear } = props || null

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
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={items}
      value={isSelected ? option : title}
    />
  )
}

export default AntdSelect
