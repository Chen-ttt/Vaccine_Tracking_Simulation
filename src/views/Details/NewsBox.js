/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-30 22:09:29
 * @LastEditTime: 2022-08-31 15:38:39
 * @LastEditors:  
 */

import React from 'react'
import { H1, H2, H3, H4, Small } from "../../components/Typography"
import { Card, LinearProgress, styled, Icon } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'

const GreyTextBox = styled('div')(
  ({ theme }) => ({
    marginLeft: '1.7vw',
    marginTop: '0.5vw',
    // marginBottom: '30px',
    fontSize: '12px',
    fontWeight: '500',
    color: 'grey',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
  })
)

const BarBox = styled('div')(
  ({ theme }) => ({
    marginLeft: '1.7vw',
    marginTop: '0.5vw',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
  })
)

export default function NewsBox ({ deliveryInfo }) {
  const [completed, setCompleted] = React.useState(20)

  React.useEffect(() => {
    function progress () {
      if (completed !== 100) {
        setCompleted((oldCompleted) => {
          return Math.min(oldCompleted + 8, 100)
        })
      }
    }

    const timer = setInterval(progress, 500)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <H1>News</H1>
      <br></br>
      {deliveryInfo.length !== 0 ? deliveryInfo.map((item, index) => {
        if (item.doctor) {
          return (
            <div key={index}>
              <Icon color='success'>
                <AddTaskIcon sx={{ fontSize: 25 }}></AddTaskIcon>
              </Icon>
              <H3 display={"inline"} marginLeft={"9px"}>Doctor {item.doctor} have informed people to come for vaccination...</H3>
              {/* <GreyTextBox>From {item.man}</GreyTextBox> */}
              <GreyTextBox>{item.time}</GreyTextBox>
            </div>
          )
        } else {
          if (item.bool) {
            return (
              <div key={index}>
                <Icon color='success'>
                  <AddTaskIcon sx={{ fontSize: 25 }}></AddTaskIcon>
                </Icon>
                <H3 display={"inline"} marginLeft={"9px"}>{item.amount} vaccines are deliveried!</H3>

                <GreyTextBox>From {item.man}</GreyTextBox>
                <GreyTextBox>{item.time}</GreyTextBox>
              </div>
            )
          } else {
            return (
              <div key={index}>
                <Icon sx={{ color: "#ffa726" }}>
                  <LocalShippingOutlinedIcon sx={{ fontSize: 25 }}></LocalShippingOutlinedIcon>
                </Icon>
                <H3 display={"inline"} marginLeft={"9px"}>{item.amount} vaccines are on the way...</H3>
                {index === deliveryInfo.length - 1 ? (
                  <BarBox>
                    <LinearProgress variant="determinate" value={completed} />
                  </BarBox>
                ) : null}

                <GreyTextBox>From {item.man}</GreyTextBox>
                <GreyTextBox>{item.time}</GreyTextBox>
              </div>
            )
          }
        }
      }) : null}
    </>
  )
}
