/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-20 23:53:05
 * @LastEditTime: 2022-08-21 23:07:47
 * @LastEditors:  
 */
import * as echarts from "echarts"
import { useEffect, useState } from "react"
import { configOptions } from "./option"
import { connect } from 'react-redux'

function LineChart (props) {
  const { id, centres } = props

  useEffect(() => {
    let myChart = echarts.init(document.getElementById('lineChartBlank'))
    let option = configOptions(centres[id].remainLine)
    option && myChart.setOption(option)
  })

  return (
    <div id="lineChartBlank" style={{ height: '400px' }}></div>
  )
}

const mapStateToProps = (state) => {
  console.log("linechart: state change", state)
  return ({
    centres: state.centreInfo
  })
}

export default connect(mapStateToProps)(LineChart)

// export default LineChart