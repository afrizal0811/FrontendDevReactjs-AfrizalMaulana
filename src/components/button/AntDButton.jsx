import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const { title, isBlock, type, handleClick, danger } = props || null

  return (
    <Button
      type={type}
      block={isBlock}
      onClick={handleClick}
      danger={danger}
    >
      {title}
    </Button>
  )
}

export default AntdButton
