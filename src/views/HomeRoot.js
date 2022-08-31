/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 02:51:28
 * @LastEditTime: 2022-08-31 03:08:02
 * @LastEditors:  
 */

import PrimarySearchAppBar from "./Topbar"
import { Outlet } from "react-router-dom"
import { styled } from '@mui/material'
import ActionAreaCard from "./Clock"
import { centreStore } from '../store/centreStore'
import { Provider } from 'react-redux'
import { createContext, useContext, useState } from "react"

const UpperBox = styled('div')(
  ({ theme }) => ({
    width: '10vw',
    marginLeft: '5vw',
    // marginRight: '20vw',
    marginTop: '30px',
    marginBottom: '30px',
    zIndex: '9999',
    position: 'fixed',
    float: 'left',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
  })
)

export const AuthContext = createContext()

const HomeRoot = () => {
  const initAuth = {
    isLogin: false,
    user: {}
  }

  return (
    <AuthContext.Provider value={initAuth}>
      <PrimarySearchAppBar />
      <Provider store={centreStore}>
        <UpperBox>
          <ActionAreaCard />
        </UpperBox>
        <Outlet />
      </Provider>
    </AuthContext.Provider>
  )
}

export default HomeRoot