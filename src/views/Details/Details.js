/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-15 19:36:02
 * @LastEditTime: 2022-08-21 23:32:45
 * @LastEditors:  
 */
import LineChart from "../../components/LineChart"
import { useParams } from "react-router-dom"
import { connect } from 'react-redux'
import { CardRoot, StyledCard } from '../../components/CardStyle'
import { Card, Grid } from '@mui/material'
import { InforBox } from "./InforBox"

function DetailPage ({ centres }) {
  const params = useParams()

  console.log("About receive:", params.id, centres)

  return (
    <div>
      <Card sx={{ px: 3, py: 2, mb: 3 }}>
        <LineChart
          id={params.id}
        // color={[theme.palette.primary.main, theme.palette.primary.light]}
        />
      </Card>

      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <InforBox centre={centres[params.id]} />
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("detail: state change", state)
  return ({
    centres: state.centreInfo
  })
}

export default connect(mapStateToProps)(DetailPage)