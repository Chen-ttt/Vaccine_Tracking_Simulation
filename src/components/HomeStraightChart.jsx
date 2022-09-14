/*
 * @Description:
 * @Author: Tong Chen
 * @Date: 2022-08-21 20:55:35
 * @LastEditTime: 2022-09-14 00:27:33
 * @LastEditors:
 */
import { useTheme, Card } from '@mui/material'
import ReactEcharts from 'echarts-for-react'
import option from './newOption'

const HomeStraightChart = ({ height, color = [] }) => {
  const { palette } = useTheme()

  return (
    <ReactEcharts
      style={{ height: height }}
      option={{
        ...option,
        color: [
          palette.primary.dark,
          palette.primary.main,
          palette.primary.light,
        ],
      }}
    />
  )
}

export default HomeStraightChart
