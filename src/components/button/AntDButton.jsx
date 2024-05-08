import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const { title, isBlock, type, handleClick } = props || null

  return (
    <Button
      type={type}
      block={isBlock}
      onClick={handleClick}
    >
      {title}
    </Button>
  )
}

export default AntdButton
