/*
 * @Description:
 * @Author: Tong Chen
 * @Date: 2022-08-21 20:55:35
 * @LastEditTime: 2022-08-31 12:35:11
 * @LastEditors:
 */
import { useTheme, Card } from '@mui/material'
import ReactEcharts from 'echarts-for-react'

const HomeLineChart = ({ height, color = [] }) => {
  const theme = useTheme()

  const option = {
    grid: { top: '10%', bottom: '10%', left: '5%', right: '5%' },
    legend: {
      itemGap: 20,
      icon: 'circle',
      textStyle: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontFamily: 'roboto',
      },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 14,
        fontFamily: 'roboto',
        color: theme.palette.text.secondary,
      },
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 },
      },
      axisLabel: {
        color: theme.palette.text.secondary,
        fontSize: 13,
        fontFamily: 'roboto',
      },
    },
    series: [
      {
        data: [30, 40, 20, 50, 40, 80, 90],
        type: 'line',
        stack: 'This month',
        name: 'This month',
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 },
      },
      {
        data: [20, 50, 15, 50, 30, 70, 95],
        type: 'line',
        stack: 'Last month',
        name: 'Last month',
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 },
      },
    ],
  }

  return (
    <Card sx={{ px: 3, py: 2, mb: 3 }}>
      <ReactEcharts
        style={{ height: height }}
        option={{ ...option, color: [...color] }}
      />
    </Card>
  )
}

export default HomeLineChart
