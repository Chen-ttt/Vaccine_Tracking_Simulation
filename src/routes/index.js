/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-02 00:30:20
 * @LastEditTime: 2022-08-21 18:58:14
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
            const { element: Element, path, subRoutes, ...otherProps } = config
            return (
              <Route
                key={path}
                path={path}
                element={<Element />}
              >
                {subRoutes ? subRoutes.map(item => (
                  <Route
                    key={item.path}
                    path={item.path}
                    element={<item.element />} />
                )) : null}
              </Route>
            )
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default Router
