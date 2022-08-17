/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-02 00:30:20
 * @LastEditTime: 2022-08-13 16:17:43
 * @LastEditors:  
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import routeConfig from './routeConfig'

function Router () {
  return (
    <BrowserRouter>
      <Routes>
        {
          routeConfig.map((config) => {
            const { element: Element, path, ...otherProps } = config
            return (
              <Route
                key={path}
                path={path}
                element={<Element />}
                {...otherProps}
              />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default Router
