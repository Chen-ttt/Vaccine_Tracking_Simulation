/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-30 18:11:59
 * @LastEditTime: 2022-08-30 19:56:37
 * @LastEditors:  
 */
import * as React from 'react'
import { connect } from 'react-redux'
import { Grid, Tooltip, Icon, Card, CardContent, CardActionArea, Typography } from '@mui/material'
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined'

function ActionAreaCard ({ time }) {
  // const timeStr = time.month + time.day + (time.hour > 12 ? (time.hour - 12 + "p.m.") : (time.hour + "a.m."))
  // console.log(time, timeStr, time.month + time.day)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        /> */}

        <CardContent>
          <Tooltip title="Clock" placement="top">
            <Icon>
              <AlarmOutlinedIcon sx={{ fontSize: 20 }}></AlarmOutlinedIcon>
            </Icon>
          </Tooltip>

          <Typography gutterBottom variant="h5" component="div" color={"#1565c0"} fontFamily={'-apple-system'} textAlign={'center'} display={"inline"} marginLeft={'1vw'} >
            {time.hour > 12 ? (" " + time.hour - 12 + " p.m.") : (" " + time.hour + " a.m.")}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontFamily={'-apple-system'} textAlign={'center'}>
            {time.month + time.day}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card >
  )
}

const mapStateToProps = (state) => {
  return ({
    time: state.globalTimer
  })
}

export default connect(mapStateToProps)(ActionAreaCard)