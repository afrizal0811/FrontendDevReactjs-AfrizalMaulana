import React, { useEffect, useState } from 'react'
import { getApi } from '../utilities/handleApi'

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
    <div>
      {data.map((item) => {
        return <h1>{item.name}</h1>
      })}
    </div>
  )
}

export default MainPage
