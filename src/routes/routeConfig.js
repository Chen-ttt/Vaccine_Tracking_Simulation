/*
 * @Description: Route config
 * @Author: Tong Chen
 * @Date: 2022-08-02 00:30:29
 * @LastEditTime: 2022-08-15 20:10:27
 * @LastEditors:  
 */

import App from "../views/App"
// import Service from "../service/Service"

export default [
  {
    path: '/',
    element: App,
    exact: true,
  },
  // {
  //   path: '/service',
  //   element: Service,
  //   exact: true,
  // },
]
