/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 02:51:28
 * @LastEditTime: 2022-08-30 19:13:32
 * @LastEditors:  
 */

import PrimarySearchAppBar from "./Topbar"
import { Outlet } from "react-router-dom"
import { styled } from '@mui/material'
import ActionAreaCard from "./Clock"
import { centreStore } from '../store/centreStore'
import { Provider } from 'react-redux'

const UpperBox = styled('div')(
  ({ theme }) => ({
    width: '10vw',
    marginLeft: '5vw',
    // marginRight: '20vw',
    marginTop: '30px',
    marginBottom: '30px',
    // backgroundColor: 'black',
    zIndex: '9999',
    position: 'fixed',
    float: 'left',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
  })
)

const HomeRoot = () => {
  return (
    <>
      <PrimarySearchAppBar />
      {/* <upperBox>
        19:22 a.m.
      </upperBox> */}
      <Provider store={centreStore}>
        <UpperBox>
          <ActionAreaCard />
        </UpperBox>
        <Outlet />
      </Provider>
    </>
  )
}

export default HomeRoot