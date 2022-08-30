/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-15 19:36:02
 * @LastEditTime: 2022-08-30 17:36:35
 * @LastEditors:  
 */
import LineChart from "../../components/LineChart"
import { useParams } from "react-router-dom"
import { connect } from 'react-redux'
import { CardRoot, StyledCard } from '../../components/CardStyle'
import { Card, Grid } from '@mui/material'
import { InforBox } from "./InforBox"
import ManBox from "./ManBox"
import DoctorBox from "./DoctorBox"

function DetailPage ({ centres, mans, doctors }) {
  const params = useParams()
  const curCentre = centres[params.id]
  const deliveryInfo = curCentre.deliveryInfo

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
            <InforBox centre={curCentre} />
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>
            News
            {deliveryInfo.length !== 0 ? deliveryInfo.map((item, index) => (
              <div key={index}>{item.man}{item.amount}</div>
            )) : null}
            <div id="addBlank"></div>
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <ManBox mans={mans} rela={curCentre.manList} />
          </Card>
        </Grid>

        <Grid item xs={8}>
          <Card sx={{ px: 3, py: 2, mb: 3 }}>
            <DoctorBox doctors={doctors} rela={curCentre.doctorList} />
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