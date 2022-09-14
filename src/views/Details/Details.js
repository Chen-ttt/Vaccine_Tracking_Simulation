/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-15 19:36:02
 * @LastEditTime: 2022-09-14 14:33:28
 * @LastEditors:  
 */
import LineChart from "../../components/LineChart"
import { useParams } from "react-router-dom"
import { connect } from 'react-redux'
import { Card, Grid } from '@mui/material'
import { InforBox } from "./InforBox"
import ManBox from "./ManBox"
import DoctorBox from "./DoctorBox"
import NewsBox from "./NewsBox"

function DetailPage ({ centres, mans, doctors }) {
  const params = useParams()
  const curCentre = centres[params.id]

  return (
    <div>
      <Card sx={{ px: 3, py: 2, mb: 3 }}>
        <LineChart
          id={params.id}
        // color={[theme.palette.primary.main, theme.palette.primary.light]}
        />
      </Card>

      <Grid container spacing={3}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <InforBox centre={curCentre} />
          </Card>

          <Grid item xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <ManBox mans={mans} rela={curCentre.manList} />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <DoctorBox doctors={doctors} rela={curCentre.doctorList} />
            </Card>
          </Grid>

        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={4}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <NewsBox deliveryInfo={curCentre.deliveryInfo} />
          </Card>
        </Grid>

      </Grid>
    </div >
  )
}

const mapStateToProps = (state) => {
  return ({
    centres: state.centreInfo,
    mans: state.manInfo,
    doctors: state.doctorInfo
  })
}

export default connect(mapStateToProps)(DetailPage)