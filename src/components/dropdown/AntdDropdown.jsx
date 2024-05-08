import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import React from 'react'
const items = [
  {
    label: <a href='https://www.antgroup.com'>1st menu item</a>,
    key: '0',
  },
  {
    label: <a href='https://www.aliyun.com'>2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

const AntdDropdown = (props) => {
    const { title } = props
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
