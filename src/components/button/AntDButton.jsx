import { Button } from 'antd'
import React from 'react'

const AntDButton = (props) => {
  const { title, isBlock, type } = props
  return (
    <Button
      type={type}
      block={isBlock}
    >
      {title}
    </Button>
  )
}

export default AntDButton
