import React from 'react'
import AntDButton from '../components/button/AntDButton'
import AntdCheckbox from '../components/checkbox/AntdCheckbox'
import AntdDivider from '../components/divider/AntdDivider'
import AntdDropdown from '../components/dropdown/AntdDropdown'
import './styles.css'

const Header = () => {
  return (
    <div>
      <AntdDivider />
      <div className='header-container'>
        <div className='header-filter'>
          <p>Filter By: </p>
          <AntdCheckbox title='Open Now' />
          <AntdDropdown title='Price' />
          <AntdDropdown title='Category' />
        </div>
        <AntDButton title='Clear All' />
      </div>
      <AntdDivider />
    </div>
  )
}

export default Header
