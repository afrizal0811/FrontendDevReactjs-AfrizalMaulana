import React from 'react'
import AntDButton from '../components/button/AntDButton'
import AntdCheckbox from '../components/checkbox/AntdCheckbox'
import AntdDivider from '../components/divider/AntdDivider'
import AntdSelect from '../components/select/AntdSelect'
import './styles.css'

const Header = (props) => {
  const { data, setIsOpenFilter, setPriceFilter, setCategoryFilter } = props
  const price = data.map((item) => item.price)
  const category = data.map((item) => item.category)
  return (
    <div>
      <AntdDivider />
      <div className='header-container'>
        <div className='header-filter'>
          <p>Filter By: </p>
          <AntdCheckbox
            title='Open Now'
            setIsOpenFilter={setIsOpenFilter}
          />
          <AntdSelect
            title='Price'
            datas={price}
            setPriceFilter={setPriceFilter}
          />
          <AntdSelect
            title='Category'
            datas={category}
            setCategoryFilter={setCategoryFilter}
          />
        </div>
        <AntDButton title='Clear All' />
      </div>
      <AntdDivider />
    </div>
  )
}

export default Header
