/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-18 18:00:33
 * @LastEditTime: 2022-07-19 16:06:00
 * @LastEditors:  
 */

import { Box, styled, Grid, Card, Button, IconButton, Tooltip } from '@mui/material'
import { Small, H6, Paragraph } from '../components/Typography'
import { centreStore } from "../store/CentreStore"
import { observer } from 'mobx-react-lite'

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100px',
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

function CenterCard () {

  return (
    <>
      <Grid container spacing={3} sx={{ mb: '24px' }}>
        {centreStore.centreList.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <StyledCard elevation={6}>
              <InfoBox>
                <Box>
                  <H6>{item.name}</H6>
                  <Small>{item.openTime}</Small>
                  <br></br>
                  <Heading>{item.amount} available</Heading>
                  <Paragraph>{item.distance} miles away</Paragraph>
                </Box>
              </InfoBox>

              <Tooltip title="View Details" placement="top">
                <IconButton>
                  {/* <Icon>arrow_right_alt</Icon> */}
                  <img src="/arrowIcon.png" alt="404" height={30} />
                </IconButton>
              </Tooltip>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Button
        size="small"
        height="10"
        padding="24px"
        color="primary"
        variant="contained"
        sx={{ textTransform: 'uppercase' }}
        onClick={() => centreStore.stopConsumption()}>
        STOP
      </Button>
    </>
  )
}

export default observer(CenterCard)