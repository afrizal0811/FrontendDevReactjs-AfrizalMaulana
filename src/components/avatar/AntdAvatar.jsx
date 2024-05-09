import { Avatar } from 'antd'
import React from 'react'

const AntdAvatar = (props) => {
  const { src, className } = props
  return (
    <Avatar
      className={className}
      size={{ xs: 50, sm: 55, md: 60, lg: 70, xl: 80, xxl: 100 }}
      src={src}
    />
  )
}

export default AntdAvatar
