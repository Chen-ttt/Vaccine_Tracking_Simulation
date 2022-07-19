/*
 * @Description: router for User
 * @Author: Tong Chen
 * @Date: 2022-07-18 21:49:58
 * @LastEditTime: 2022-07-19 17:51:52
 * @LastEditors:  
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Service from './service/Service'


function Router () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/service' element={<Service />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router