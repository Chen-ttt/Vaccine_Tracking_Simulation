/*
 * @Description: Render A List of Centre Cards with Responsive Data
 * @Author: Tong Chen
 * @Date: 2022-07-18 18:00:33
 * @LastEditTime: 2022-08-20 00:16:44
 * @LastEditors:  
 */

import { Box, styled, Grid, Card, Button, IconButton, Tooltip } from '@mui/material'
import { Small, H6, Paragraph } from '../components/Typography'
import { connect } from 'react-redux'
import { initCentreDB, clearAction } from '../actions/consumeAction'
import { useEffect } from 'react'
import { centreStore } from '../store/centreStore'

const StyledCard = styled(Card)(({ theme }) => ({
  height: '110px',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px !important',
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
  console.log("props", props)
  const { state, get, clearTimer, show } = props
  const centreInfo = state.centreInfo

  return (
    <>
      <Grid container spacing={3} sx={{ mb: '24px' }}>
        {centreInfo ? centreInfo.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StyledCard elevation={6}>
              <InfoBox>
                <Box>
                  <H6>{item.name}</H6>
                  <Small>{item.openTime}</Small>
                  <br></br>
                  <Heading>{item.initVaccine} available</Heading>
                  <Paragraph>{item.distance} miles away</Paragraph>
                </Box>
              </InfoBox>

              <Tooltip title="View Details" placement="top">
                <IconButton>
                  {/* <Icon>arrow_right_alt</Icon> */}
                  <img src="/icon/arrowIcon.png" alt="404" height={30} />
                </IconButton>
              </Tooltip>
            </StyledCard>
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
  console.log("state change", state)
  return ({
    state: state
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    get: () => dispatch(initCentreDB()),
    clearTimer: () => dispatch(clearAction()),
    show: () => console.log(centreStore.getState())
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterCard)