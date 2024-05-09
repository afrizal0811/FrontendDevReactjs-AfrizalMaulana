import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const {
    title,
    isBlock,
    type,
    handleClick,
    danger,
    shape,
    icon,
    iconPosition,
    className,
  } = props || null

  return (
    <Button
      className={className}
      type={type}
      block={isBlock}
      onClick={handleClick}
      danger={danger}
      shape={shape}
      icon={icon}
      iconPosition={iconPosition}
    >
      {title}
    </Button>
  )
}

export default AntdButton
