/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-15 19:36:02
 * @LastEditTime: 2022-08-22 22:10:49
 * @LastEditors:  
 */
import CenterCard from './CentreCard'
import { Grid } from '@mui/material'
import { Provider } from 'react-redux'
import { centreStore } from '../../store/centreStore'

function CentreList ({ number }) {
  return (
    <Provider store={centreStore}>
      {/* <Grid item lg={8} md={8} sm={12} xs={12}> */}
      {/* <greyTitle>Ms pro</greyTitle> */}
      <CenterCard number={number} />
      {/* </Grid> */}
    </Provider>
  )
}

export default CentreList