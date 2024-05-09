import { Card } from 'antd'
import React from 'react'
import './styles.css'

const AntdCard = (props) => {
  const { url, title, isCover, children, className, width } = props

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
      style={{ width: width }}
      cover={renderCover}
    >
      {children}
    </Card>
  )
}

export default AntdCard
