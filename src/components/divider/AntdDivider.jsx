import { Divider } from 'antd'
import React from 'react'
const AntdDivider = (props) => {
  const { text } = props
  return <Divider> {text}</Divider>
}

export default AntdDivider
