/*
 * @Description: Dynamic Card of several Progress Bar
 * @Author: Tong Chen
 * @Date: 2022-07-18 21:15:04
 * @LastEditTime: 2022-08-21 19:14:26
 * @LastEditors:
 */
import { Box } from '@mui/material'
import MatxProgressBar from '../../components/MatxProgressBar'
import SimpleCard from '../../components/SimpleCard'
import { Small } from '../../components/Typography'

const Campaigns = () => {
  return (
    <Box>
      <SimpleCard title="Campaigns">
        <Small color="text.secondary">Today</Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <MatxProgressBar value={75} color="primary" text="Google (102k)" />
        <MatxProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <MatxProgressBar value={75} color="primary" text="Tensor (80k)" />
      </SimpleCard>
    </Box>
  )
}

export default Campaigns
