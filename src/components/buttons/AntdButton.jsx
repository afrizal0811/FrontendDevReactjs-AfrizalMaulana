import { Button } from 'antd'
import React from 'react'

const AntdButton = (props) => {
  const {
    className,
    danger,
    handleClick,
    icon,
    iconPosition,
    isBlock,
    shape,
    title,
    type,
  } = props || null

  return (
    <Button
      block={isBlock}
      className={className}
      danger={danger}
      icon={icon}
      iconPosition={iconPosition}
      onClick={handleClick}
      shape={shape}
      type={type}
    >
      {title}
    </Button>
  )
}

export default AntdButton
