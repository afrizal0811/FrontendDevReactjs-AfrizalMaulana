import { Image } from 'antd'
import React from 'react'

const AntdImage = (props) => {
  const { src, width } = props

  return (
    <Image
      preview={false}
      src={src}
      width={width}
    />
  )
}

export default AntdImage
