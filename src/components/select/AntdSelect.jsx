import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { itemConvert } from './help'
const AntdSelect = (props) => {
  const { title, datas, setPriceFilter, setCategoryFilter } = props
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(itemConvert(datas))
  }, [datas])

  const handleChange = (value) => {
    if (title === 'Price') setPriceFilter(value)
    if (title === 'Category') setCategoryFilter(value)
  }

  return (
    <Select
      defaultValue={title}
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={items}
    />
  )
}

export default AntdSelect
