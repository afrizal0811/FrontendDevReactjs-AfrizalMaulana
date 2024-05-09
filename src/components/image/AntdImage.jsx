import { Image } from 'antd'
import React from 'react'

const AntdImage = (props) => {
  const { src, width } = props

  return (
    <Image
      width={width}
      src={src}
      preview={false}
    />
  )
}

export default AntdImage
