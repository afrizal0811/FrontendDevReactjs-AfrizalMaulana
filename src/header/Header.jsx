import React from 'react'
import AntdButton from '../components/button/AntdButton'
import AntdCheckbox from '../components/checkbox/AntdCheckbox'
import AntdDivider from '../components/divider/AntdDivider'
import AntdSelect from '../components/select/AntdSelect'
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
          <AntdCheckbox
            title='Open Now'
            {...props}
          />
          <AntdSelect
            title='Price'
            datas={price}
            {...props}
          />
          <AntdSelect
            title='Category'
            datas={category}
            {...props}
          />
        </div>
        <AntdButton
          title='Clear All'
          {...props}
        />
      </div>
      <AntdDivider />
    </div>
  )
}

export default Header
