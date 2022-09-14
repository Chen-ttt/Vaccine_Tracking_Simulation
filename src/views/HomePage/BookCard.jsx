/*
 * @Description:
 * @Author: Tong Chen
 * @Date: 2022-07-18 21:13:55
 * @LastEditTime: 2022-09-14 01:13:54
 * @LastEditors:
 */
import { Button, styled } from '@mui/material'
import { CardRoot, StyledCard } from '../../components/CardStyle'
import HomeStraightChart from '../../components/HomeStraightChart'
import { H3 } from '../../components/Typography'

// const Paragraph = styled('p')(({ theme }) => ({
//   margin: 0,
//   // paddingTop: '10px',
//   // paddingBottom: '10px',
//   color: theme.palette.text.secondary,
// }))

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '600',
  marginRight: '.5rem',
  textTransform: 'capitalize',
  marginTop: '20px',
}))

const UpgradeCard = () => {
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <br />
        <Title>Supply Top</Title>
        {/* <img src="/icon/bookIcon.png" alt="404" height={50} />

        <Paragraph>
          Not get <b>Vaccine</b> yet? <br /> Take Vaccine to protexct yourself.
        </Paragraph>

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}>
          Book now
        </Button> */}
        <HomeStraightChart height="355px" />
      </StyledCard>
    </CardRoot>
  )

  // return (
  //   <HomeStraightChart height="300px"/>
  // )
}

export default UpgradeCard
