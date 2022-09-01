/*
 * @Description: Render A List of Centre Cards with Responsive Data
 * @Author: Tong Chen
 * @Date: 2022-07-18 18:00:33
 * @LastEditTime: 2022-08-31 17:45:05
 * @LastEditors:  
 */

import React from 'react'
import { useEffect, useRef } from "react"
import { createRoot } from 'react-dom/client'
import { Box, styled, Grid, Card, Button, IconButton, Tooltip, Icon } from '@mui/material'
import { Small, H3, H6, H2 } from '../../components/Typography'
import CustomizedSnackbars from '../../components/MessageBar'
import { connect } from 'react-redux'
import { clearAction } from '../../actions/consumeAction'
import { requestAction } from '../../actions/emailAction'
import { useNavigate } from "react-router-dom"
import { RemainTag } from "../../components/RemainTag"
import { colorPalette } from "../../components/themeConfig"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined'

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px !important',
  background: theme.palette.background.paper,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}))

const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  '& small': { color: theme.palette.text.secondary },
  '& .icon': { opacity: 0.6, fontSize: '44px', color: theme.palette.primary.main },
}))

const Heading = styled('h6')(({ theme }) => ({
  margin: 0,
  marginTop: '4px',
  fontSize: '14px',
  fontWeight: '500',
  color: theme.palette.primary.main,
}))

function CenterCard (props) {
  console.log("from card props", props)
  const { number, allCentres, clearTimer, checkLess } = props

  const [msgBar, setMsgBar] = React.useState(null)
  const [divCom, setDivCom] = React.useState(null)

  // use ref to append DOM node
  const msgDivRef = useRef(null)

  // firstly, check if centres need to send request emails to manufacturers
  // it will be called every time the state is changed
  const resultOfEmail = checkLess()
  if (resultOfEmail) {
    setMsgBar(resultOfEmail)
    console.log("checkLess return ", resultOfEmail, msgBar)
  }

  useEffect(() => {
    if (msgBar === null) {
      setDivCom(createRoot(msgDivRef.current)) // initail the div component
    }

    // if there are several centres in emergency, just show one message bar
    if (msgBar && divCom) {
      divCom.render(<CustomizedSnackbars
        state={"warning"}
        message={allCentres[msgBar[0]].name + " is in a stock emergency!"} />)
    }
  }, [msgBar])

  // number means which page is asking CentreCards, Home page or Centre page
  // if Home page, just show 6 cards
  const centreInfo = number ? allCentres.slice(0, number) : allCentres
  const numCol = number === 6 ? 6 : 4

  // use Navigate to jump to Detail page
  const navigate = useNavigate()
  const goToDetails = (id) => {
    navigate('/details/' + id)
  }

  const { bgRed, bgYellow, bgGreen } = colorPalette

  return (
    <>
      <div id='msgBarDiv' ref={msgDivRef}></div>
      <Grid container spacing={3}>
        {centreInfo ? centreInfo.map((item, index) => (
          <Grid item xs={12} md={numCol} key={index}>
            <Card sx={{ px: 3, py: 2, mb: 0 }}>
              <Grid container spacing={3}>
                <Grid item xs={9}>
                  <Box>
                    <H2>{item.name}</H2>
                    <Small>{item.openTime}</Small>
                    <br></br>
                    {item.initVaccine ? (
                      item.initVaccine < 30 ? (
                        <RemainTag bgcolor={bgYellow}>
                          {item.initVaccine} available
                        </RemainTag>
                      ) : (
                        <RemainTag bgcolor={bgGreen}>in stock</RemainTag>
                      )
                    ) : (
                      <RemainTag bgcolor={bgRed}>out of stock</RemainTag>
                    )}
                    <br></br>
                    <br></br>
                    <Grid container spacing={0}>
                      <Grid item>
                        <img src="/icon/distance.png" alt="404" height={18} />
                      </Grid>
                      <Grid item>
                        <H6>{item.distance} miles away</H6>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>

                <Grid item xs={3}>
                  <br></br>
                  <Tooltip title="View Details" placement="top">
                    <IconButton onClick={() => goToDetails(item.ID)}>
                      {/* <Icon>"arrow_right_alt"</Icon>
                      <img src="/icon/arrow.png" alt="404" height={40} /> */}
                      <ArrowRightAltOutlinedIcon sx={{ fontSize: 35 }}></ArrowRightAltOutlinedIcon>
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>

            </Card>

          </Grid>
        )) : null}
      </Grid>

      <Button
        size="small"
        height="10"
        padding="24px"
        color="primary"
        variant="contained"
        sx={{ textTransform: 'uppercase' }}
        onClick={() => clearTimer()}>
        STOP
      </Button>
    </>
  )
}

const mapStateToProps = (state) => {
  return ({
    allCentres: state.centreInfo
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    clearTimer: () => dispatch(clearAction()),
    checkLess: () => dispatch(requestAction())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterCard)