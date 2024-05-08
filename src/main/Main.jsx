import React, { useEffect, useState } from 'react'
import AntdCard from '../components/card/AntdCard'
import { getApi } from '../utilities/handleApi'
import './styles.css'
import Header from '../header/Header'

const Main = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_API_URL
      setData(await getApi(url))
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <h1>Restaurant</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea
          officia voluptate, sunt facilis sed. Architecto pariatur quam
          consequuntur expedita?
        </p>
        <Header />
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
