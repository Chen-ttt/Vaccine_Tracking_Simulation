/*
 * @Description:
 * @Author: Tong Chen
 * @Date: 2022-07-18 21:13:55
 * @LastEditTime: 2022-07-19 17:44:57
 * @LastEditors:
 */
import { Button, Card, styled } from '@mui/material'

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}))

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  // background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}))

const Paragraph = styled('p')(({ theme }) => ({
  margin: 0,
  paddingTop: '24px',
  paddingBottom: '24px',
  color: theme.palette.text.secondary,
}))

const UpgradeCard = () => {
  return (
    <CardRoot>
      <StyledCard elevation={0}>
        <img src="/icon/bookIcon.png" alt="404" height={50} />

        <Paragraph>
          Not get <b>Vaccine</b> yet? <br /> Take Vaccine to protexct yourself.
        </Paragraph>

        <Button
          size="large"
          color="primary"
          variant="contained"
          sx={{ textTransform: 'uppercase' }}>
          Book now
        </Button>
      </StyledCard>
    </CardRoot>
  )
}

export default UpgradeCard
