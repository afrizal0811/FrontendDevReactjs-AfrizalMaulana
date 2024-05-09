import { RightOutlined, SyncOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AntdButton from '../components/buttons/AntdButton'
import AntdCard from '../components/card/AntdCard'
import AntdRate from '../components/rate/AntdRate'
import AntdSpin from '../components/spin/AntdSpin'
import Header from '../header/Header'
import { getApi } from '../utilities/handleApi'
import { isEmpty } from '../utilities/isEmpty'
import './styles.css'

const Main = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isOpenFilter, setIsOpenFilter] = useState(null)
  const [priceFilter, setPriceFilter] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [isClear, setIsClear] = useState(false)
  const [pageNumber, setPageNumber] = useState(10)

  const isShowData = !isEmpty(data) && !isLoading
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
  const dataLength = newData.length
  const isShowLoad = pageNumber < dataLength

  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_API_URL
      setData(await getApi(url))
    }
    fetchData()
    setIsLoading(false)
    if (hasFilter) setPageNumber(10)
  }, [isOpenFilter, hasFilter])

  const renderLoading = <AntdSpin size='large' />
  const renderLoadButton = (
    <AntdButton
      title='Load More'
      handleClick={() => setPageNumber(pageNumber + 10)}
      type='primary'
      danger={true}
      isBlock={true}
      icon={<SyncOutlined spin />}
    />
  )

  const renderCards = (
    <div className='cards'>
      {newData.map((item, index) => {
        if (index + 1 <= pageNumber) {
          return (
            <div className='card'>
              <AntdCard
                url={item.image}
                id={item.id}
                title={item.name}
                isCover={true}
                width={320}
              >
                <h4>{item.name}</h4>
                <AntdRate number={item.rating} />
                <div className='card-content'>
                  <p>{`${item.category} - ${item.price}`}</p>
                  <p>
                    <span
                      className='dot'
                      style={{
                        'background-color': item.is_open ? 'lime' : 'red',
                      }}
                    />
                    {item.is_open ? 'OPEN NOW' : 'CLOSED'}
                  </p>
                </div>
                <Link to={`/detail/${item.id}`}>
                  <AntdButton
                    title='Learn More'
                    isBlock='true'
                    type='primary'
                    icon={<RightOutlined />}
                    iconPosition='end'
                  />
                </Link>
              </AntdCard>
            </div>
          )
        } else return null
      })}
      {isShowLoad && renderLoadButton}
    </div>
  )

  return (
    <div className='main-container'>
      <div className='main-header'>
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
      {isShowData ? renderCards : renderLoading}
    </div>
  )
}

export default Main
