import { Card } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import AntdButton from '../button/AntdButton'
import AntdRate from '../rate/AntdRate'
import './styles.css'

const AntdCard = (props) => {
  const { url, id, title, category, price, isOpen, rating } = props
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
      <Link to={`/detail/${id}`}>
        <AntdButton
          title='Learn More'
          isBlock='true'
          type='primary'
        />
      </Link>
    </Card>
  )
}

export default AntdCard
