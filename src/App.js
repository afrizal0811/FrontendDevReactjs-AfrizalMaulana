// import EditApi from './components/edit_api/EditApi'
import React, { useEffect, useState } from 'react'
import './App.css'
import Main from './main/Main'
import { getApi } from './utilities/handleApi'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const url = process.env.REACT_APP_API_URL
      setData(await getApi(url))
    }
    fetchData()
  }, [])
  
  return (
    <div className='App'>
      {/* <EditApi /> */}
      <Main data={data} />
    </div>
  )
}

export default App
