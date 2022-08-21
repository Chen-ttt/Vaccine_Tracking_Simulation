/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 02:51:28
 * @LastEditTime: 2022-08-21 18:58:25
 * @LastEditors:  
 */

import PrimarySearchAppBar from "./Topbar"
import { Outlet } from "react-router-dom"

const HomeRoot = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Outlet />
    </>
  )
}

export default HomeRoot