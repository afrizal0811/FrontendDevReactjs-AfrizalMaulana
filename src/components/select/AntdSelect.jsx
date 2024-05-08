import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { itemConvert } from './help'

const AntdSelect = (props) => {
  const {
    title,
    datas,
    setPriceFilter,
    setCategoryFilter,
    isClear,
    setIsClear,
  } = props

  const [items, setItems] = useState([])
  const [option, setOption] = useState('')
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    setItems(itemConvert(datas))
    if (isClear) {
      setIsSelected(false)
      setPriceFilter(null)
      setCategoryFilter(null)
    }
    setIsClear(false)
  }, [datas, isClear, setIsClear, setPriceFilter, setCategoryFilter])

  const handleChange = (value) => {
    setIsSelected(value)
    setOption(value)
    if (title === 'Price') setPriceFilter(value)
    if (title === 'Category') setCategoryFilter(value)
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
