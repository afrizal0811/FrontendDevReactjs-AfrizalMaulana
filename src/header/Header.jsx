import React from 'react'
import AntdButton from '../components/button/AntdButton'
import AntdCheckbox from '../components/checkbox/AntdCheckbox'
import AntdDivider from '../components/divider/AntdDivider'
import AntdSelect from '../components/select/AntdSelect'
import './styles.css'

const Header = (props) => {
  const {
    data,
    setPriceFilter,
    setCategoryFilter,
    setIsOpenFilter,
    isClear,
    setIsClear,
  } = props

  const price = data.map((item) => item.price)
  const category = data.map((item) => item.category)

  return (
    <div>
      <AntdDivider />
      <div className='header-container'>
        <diV className='header-content'>
          <p>Filter By: </p>
          <div className='header-filter'>
            <AntdCheckbox
              title='Open Now'
              setIsOpenFilter={setIsOpenFilter}
              isClear={isClear}
              setIsClear={setIsClear}
            />
            <AntdSelect
              title='Price'
              datas={price}
              setFilter={setPriceFilter}
              isClear={isClear}
              setIsClear={setIsClear}
            />
            <AntdSelect
              title='Category'
              datas={category}
              setFilter={setCategoryFilter}
              isClear={isClear}
              setIsClear={setIsClear}
            />
          </div>
        </diV>
        <AntdButton
          title='Clear All'
          handleClick={() => setIsClear(true)}
        />
      </div>
      <AntdDivider />
    </div>
  )
}

export default Header
