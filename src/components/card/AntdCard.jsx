import { Card } from 'antd'
import React from 'react'
import './styles.css'

const AntdCard = (props) => {
  const { url, title, isCover, children } = props

  const cardCover = (
    <img
      alt={title}
      src={url}
    />
  )

  const renderCover = isCover && cardCover
  return (
    <Card
      style={{ width: 320 }}
      cover={renderCover}
    >
      {children}
    </Card>
  )
}

export default AntdCard
