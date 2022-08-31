/*
 * @Description: Route config
 * @Author: Tong Chen
 * @Date: 2022-08-02 00:30:29
 * @LastEditTime: 2022-08-31 00:11:44
 * @LastEditors:  
 */

import App from "../views/HomePage/App"
import Root from "../views/Details/Root"
import HomeRoot from "../views/HomeRoot"
import ServiceLogin from "../views/Service/Login"
import HomeLineChart from "../components/HomeLineChart"
import Service from "../service/Service"
import DeliveryForm from "../service/DeliveryForm"
import CentrePage from "../views/CentreList/CentrePage"

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
        element: CentrePage
      },
      {
        path: '/service',
        element: Service,
        thirdRoutes: [
          {
            path: '/service/:id',
            element: DeliveryForm
          }
        ]
      },
      {
        path: '/details/:id',
        element: Root,
        exact: true,
      },
      {
        path: '/login',
        element: ServiceLogin
      }
    ]
  },
  {
    path: '/test',
    element: ServiceLogin,
    exact: true,
  }
]
