/*
 * @Description: Main page of service which includes Centre Table and Delivery Form
 * @Author: Tong Chen
 * @Date: 2022-07-18 21:42:35
 * @LastEditTime: 2022-08-22 03:26:32
 * @LastEditors:
 */

import CentresTable from './CentresTable'
import DeliveryForm from './DeliveryForm'
import SimpleCard from '../components/SimpleCard'
import { Fragment } from 'react'
import { ContentBox } from '../views/HomePage/App'
import { Stack, Grid } from '@mui/material'
import { centreStore } from '../store/centreStore'
import { Provider } from 'react-redux'
import { Outlet } from 'react-router-dom'

function Service() {
  return (
    <Provider store={centreStore}>
      <Fragment>
        <ContentBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <CentresTable />
            </Grid>
            <Grid item xs={12} md={4}>
              <Outlet />
            </Grid>
          </Grid>
        </ContentBox>
      </Fragment>
    </Provider>
  )
}

export default Service
