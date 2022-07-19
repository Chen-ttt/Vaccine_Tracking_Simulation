/*
 * @Description: Main page of service which includes Centre Table and Delivery Form
 * @Author: Tong Chen
 * @Date: 2022-07-18 21:42:35
 * @LastEditTime: 2022-07-19 17:37:42
 * @LastEditors:
 */

import TopSellingTable from './TopSellingTable'
import DeliveryForm from './DeliveryForm'
import SimpleCard from '../components/SimpleCard'
import { Fragment } from 'react'
import { ContentBox } from '../App'
import { Stack, Grid } from '@mui/material'
import { observer } from 'mobx-react-lite'

import { selectStore } from '../store/SelectStore'
import { formStore } from '../store/FormStore'

function Service() {
  console.log(selectStore.choice.appear)
  console.log(formStore.form)

  return (
    <Fragment>
      <ContentBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <TopSellingTable selectStore={selectStore} />
          </Grid>
          <Grid item xs={12} md={4}>
            {selectStore.choice.appear ? (
              <Stack spacing={3}>
                <SimpleCard>
                  <DeliveryForm
                    centreName={selectStore.choice.centre}
                    formStore={formStore}
                    selectStore={selectStore}
                  />
                </SimpleCard>
              </Stack>
            ) : null}
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  )
}

export default observer(Service)
