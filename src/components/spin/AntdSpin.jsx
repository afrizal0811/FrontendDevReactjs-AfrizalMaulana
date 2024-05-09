import { Spin } from 'antd'
import React from 'react'

const AntdSpin = (props) => {
  const { size } = props
  return (
    <Spin
      size={size}
      style={{
        'align-items': 'center',
        'justify-content': 'center',
        display: 'flex',
        height: '100vh',
      }}
    />
  )
}

export default AntdSpin
