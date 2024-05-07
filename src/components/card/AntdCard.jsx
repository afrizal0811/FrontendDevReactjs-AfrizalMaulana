import { Button, Card } from 'antd'
import React from 'react'
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
        <div>
          <p>{category}</p>
          <p>{price}</p>
        </div>
        <p>
          <span
            className='dot'
            style={{ 'background-color': isOpen ? 'lime' : 'red' }}
          />
          {isOpen ? 'OPEN NOW' : 'CLOSED'}
        </p>
      </div>
      <Button
        type='primary'
        block
      >
        Learn More
      </Button>
    </Card>
  )
}

export default AntdCard
