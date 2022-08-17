/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-15 19:36:02
 * @LastEditTime: 2022-08-17 16:18:13
 * @LastEditors:  
 */
import CenterCard from './CentreCard'
import { Grid } from '@mui/material'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { vaccineReducer } from '../reducers/vaccineReducer'
import { getCentreDB } from '../actions/consumeAction'

const centreStore = createStore(vaccineReducer, applyMiddleware(thunk))
centreStore.dispatch(getCentreDB())
console.log("state", centreStore.getState())

function CentreList () {
  return (
    <Provider store={centreStore}>
      <Grid item lg={8} md={8} sm={12} xs={12}>
        {/* <greyTitle>Ms pro</greyTitle> */}
        <CenterCard />
      </Grid>
    </Provider>
  )
}

export default CentreList