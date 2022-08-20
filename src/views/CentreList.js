/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-15 19:36:02
 * @LastEditTime: 2022-08-19 16:35:41
 * @LastEditors:  
 */
import CenterCard from './CentreCard'
import { Grid } from '@mui/material'
import { Provider } from 'react-redux'
import { centreStore } from '../store/centreStore'

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