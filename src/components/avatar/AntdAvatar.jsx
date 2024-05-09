import { Avatar } from 'antd'
import React from 'react'

const AntdAvatar = (props) => {
  const { src } = props
  return (
    <Avatar
      size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
      src={src}
    />
  )
}

export default AntdAvatar
