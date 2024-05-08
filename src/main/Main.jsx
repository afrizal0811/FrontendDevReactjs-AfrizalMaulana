import React, { useEffect, useState } from 'react'
import AntdCard from '../components/card/AntdCard'
import Header from '../header/Header'
import { getApi } from '../utilities/handleApi'
import './styles.css'
const Main = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_API_URL
      setData(await getApi(url))
    }
    fetchData()
  }, [])
  const [isOpenFilter, setIsOpenFilter] = useState(null)
  const [priceFilter, setPriceFilter] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [isClear, setIsClear] = useState(false)

  const isOpenNotNull = isOpenFilter !== null
  const priceNotNull = priceFilter !== null
  const categoryNotNull = categoryFilter !== null
  const hasFilter = isOpenNotNull || priceNotNull || categoryNotNull

  const FilteredData = data.filter(
    (item) =>
      (isOpenNotNull ? item.is_open === isOpenFilter : []) &&
      (priceNotNull ? item.price === priceFilter : []) &&
      (categoryNotNull ? item.category === categoryFilter : [])
  )

  const newData = hasFilter ? FilteredData : data

  return (
    <div>
      <div>
        <h1>Restaurant</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ea
          officia voluptate, sunt facilis sed. Architecto pariatur quam
          consequuntur expedita?
        </p>
        <Header
          data={data}
          setIsOpenFilter={setIsOpenFilter}
          setPriceFilter={setPriceFilter}
          setCategoryFilter={setCategoryFilter}
          isClear={isClear}
          setIsClear={setIsClear}
        />
      </div>

      <div className='main-container'>
        {newData.map((item) => {
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
