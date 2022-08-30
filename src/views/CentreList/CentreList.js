/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-15 19:36:02
 * @LastEditTime: 2022-08-30 19:02:56
 * @LastEditors:  
 */
import CenterCard from './CentreCard'
import { Grid } from '@mui/material'
import { Provider } from 'react-redux'
import { centreStore } from '../../store/centreStore'

function CentreList ({ number }) {
  return (
    <>
      <CenterCard number={number} />
    </>
  )
}

export default CentreList

/**
 * <Provider store={centreStore}>
    // </Provider>
    */