import React from 'react'
import AntdCard from '../components/card/AntdCard'
import Header from '../header/Header'
import './styles.css'

const Main = (props) => {
  const { data } = props
  return (
    <div>
      <div>
        <h1>Restaurant</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea
          officia voluptate, sunt facilis sed. Architecto pariatur quam
          consequuntur expedita?
        </p>
        <Header data={data} />
      </div>

      <div className='main-container'>
        {data.map((item) => {
          return (
            <div className='main-content'>
              <AntdCard
                url={item.image}
                title={item.name}
                category={item.category}
                price={item.price}
                rating={item.rating}
                isOpen={item.is_open}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main
