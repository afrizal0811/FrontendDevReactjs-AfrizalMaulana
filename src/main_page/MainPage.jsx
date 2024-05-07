import React, { useEffect, useState } from 'react'
import AntdCard from '../components/card/AntdCard'
import { getApi } from '../utilities/handleApi'
import './styles.css'

const MainPage = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_API_URL
      setData(await getApi(url))
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      {data.map((item) => {
        return (
          <div className='content'>
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
  )
}

export default MainPage
