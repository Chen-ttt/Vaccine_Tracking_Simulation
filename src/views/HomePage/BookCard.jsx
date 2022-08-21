/*
 * @Description:
 * @Author: Tong Chen
 * @Date: 2022-07-18 21:13:55
 * @LastEditTime: 2022-08-21 19:14:09
 * @LastEditors:
 */
import { Button, styled } from '@mui/material'
import { CardRoot, StyledCard } from '../../components/CardStyle'

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
