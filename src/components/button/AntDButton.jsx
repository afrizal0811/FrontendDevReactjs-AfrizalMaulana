import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const { title, isBlock, type, setIsClear } = props

  return (
    <Button
      type={type}
      block={isBlock}
      onClick={() => setIsClear(true)}
    >
      {title}
    </Button>
  )
}

export default AntdButton
