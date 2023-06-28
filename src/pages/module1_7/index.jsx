import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './home'

const Root1_7 = () => {
   return (
      <Routes>
         <Route path='/home' element={<HomePage />} />
      </Routes>
   )
}

export default Root1_7