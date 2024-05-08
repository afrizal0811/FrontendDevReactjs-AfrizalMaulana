import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { itemConvert } from './help'
const AntdDropdown = (props) => {
  const { title, datas } = props
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(itemConvert(datas))
  }, [datas])

  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    >
      <a
        onClick={(e) => e.preventDefault()}
        href={() => false}
      >
        <Space>
          {title}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  )
}

export default AntdDropdown
