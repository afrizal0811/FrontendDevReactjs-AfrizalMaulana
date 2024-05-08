import React from 'react'
import AntDButton from '../components/button/AntDButton'
import AntdCheckbox from '../components/checkbox/AntdCheckbox'
import AntdDivider from '../components/divider/AntdDivider'
import AntdDropdown from '../components/dropdown/AntdDropdown'
import './styles.css'

const Header = (props) => {
  const { data } = props
  const price = data.map((item) => item.price)
  const category = data.map((item) => item.category)
  return (
    <div>
      <AntdDivider />
      <div className='header-container'>
        <div className='header-filter'>
          <p>Filter By: </p>
          <AntdCheckbox title='Open Now' />
          <AntdDropdown
            title='Price'
            datas={price}
          />
          <AntdDropdown
            title='Category'
            datas={category}
          />
        </div>
        <AntDButton title='Clear All' />
      </div>
      <AntdDivider />
    </div>
  )
}

export default Header
