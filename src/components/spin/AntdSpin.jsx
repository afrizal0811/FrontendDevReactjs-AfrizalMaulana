import { Spin } from 'antd'
import React from 'react'

const AntdSpin = (props) => {
  const { size } = props
  return (
    <Spin
      size={size}
      style={{
        display: 'flex',
        height: '100vh',
        'justify-content': 'center',
        'align-items': 'center',
      }}
    />
  )
}

export default AntdSpin
