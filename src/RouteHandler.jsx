import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './main/Main'
import Detail from './detail/Detail'
const RouteHandler = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Main />}
      />
      <Route
        path='/detail/:id'
        element={<Detail />}
      />
    </Routes>
  )
}

export default RouteHandler
