/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-18 16:37:01
 * @LastEditTime: 2022-07-19 16:01:40
 * @LastEditors:  
 */

import { Fragment } from 'react'
import { Card, styled, Grid, useTheme } from '@mui/material'
import CenterCard from './views/CenterCard'
import PieChart from './views/PieChart'
import BookCard from './views/BookCard'
import Campaigns from './views/Campaigns'

export const ContentBox = styled('div')(
  ({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
  })
)

const greyTitle = styled('h4')(
  ({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
  })
)

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}))

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}))

function App () {
  const { palette } = useTheme()

  return (
    <Fragment>
      <ContentBox className='app'>
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            {/* <greyTitle>Ms pro</greyTitle> */}
            <CenterCard />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Vaccine Type</Title>
              <SubTitle>approved for use in UK</SubTitle>

              <PieChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card>

            <BookCard />
            {/* <Campaigns /> */}
          </Grid>

        </Grid>
      </ContentBox>
    </Fragment>
  )
}

export default App
