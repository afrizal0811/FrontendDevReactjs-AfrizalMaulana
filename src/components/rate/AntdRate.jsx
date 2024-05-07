import { Rate } from 'antd'
import React from 'react'

const AntdRate = (props) => {
  const { number } = props
  return (
    <Rate
      disabled
      defaultValue={number}
    />
  )
}

export default AntdRate
