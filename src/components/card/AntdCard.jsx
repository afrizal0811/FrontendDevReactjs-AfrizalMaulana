import { Card } from 'antd'
import React from 'react'

const AntdCard = (props) => {
  const { children, className, isCover, title, url, width } = props

  const cardCover = (
    <img
      alt={title}
      src={url}
    />
  )

  const renderCover = isCover && cardCover
  return (
    <Card
      className={className}
      cover={renderCover}
      style={{ width: width }}
    >
      {children}
    </Card>
  )
}

export default AntdCard
