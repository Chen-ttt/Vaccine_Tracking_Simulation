/*
 * @Description: Route config
 * @Author: Tong Chen
 * @Date: 2022-08-02 00:30:29
 * @LastEditTime: 2022-08-21 21:04:14
 * @LastEditors:  
 */

import App from "../views/HomePage/App"
import Root from "../views/Details/Root"
import HomeRoot from "../views/HomeRoot"
import { MenuButton } from "../views/MenuButton"
import HomeLineChart from "../components/HomeLineChart"
// import Service from "../service/Service"

export default [
  {
    path: '/',
    element: HomeRoot,
    exact: true,
    subRoutes: [
      {
        path: '/home',
        element: App
      },
      {
        path: '/centres',
        element: MenuButton
      },
      {
        path: '/service',
        element: MenuButton
      },
      {
        path: '/details/:id',
        element: Root,
        exact: true,
      },
    ]
  },
  {
    path: '/test',
    element: HomeLineChart,
    exact: true,
  },
  // {
  //   path: '/test1',
  //   element: TestRoot,
  //   exact: true,
  // },
  // {
  //   path: '/test2',
  //   element: PrimarySearchAppBar,
  //   exact: true
  // }
]
