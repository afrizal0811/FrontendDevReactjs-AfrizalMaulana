import { Card } from 'antd'
import React from 'react'
import AntDButton from '../button/AntDButton'
import AntdRate from '../rate/AntdRate'
import './styles.css'
const AntdCard = (props) => {
  const { url, title, category, price, isOpen, rating } = props
  return (
    <Card
      style={{ width: 320 }}
      cover={
        <img
          alt={title}
          src={url}
        />
      }
    >
      <h4>{title}</h4>
      <AntdRate number={rating} />
      <div className='card-content'>
        <p>{`${category} - ${price}`}</p>
        <p>
          <span
            className='dot'
            style={{ 'background-color': isOpen ? 'lime' : 'red' }}
          />
          {isOpen ? 'OPEN NOW' : 'CLOSED'}
        </p>
      </div>
      <AntDButton
        title='Learn More'
        isBlock='true'
        type='primary'
      />
    </Card>
  )
}

export default AntdCard
