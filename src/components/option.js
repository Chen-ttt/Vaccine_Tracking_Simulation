import * as echarts from "echarts"

let bgColor = "#fff"
let color = ["#0090FF", "#36CE9E", "#FFC005", "#FF515A", "#8B5CFF", "#00CA69"]

let createData = (remainLine, rateLine) => {
  return remainLine.map((item, index) => ({
    name: index,
    value1: item,
    value2: rateLine[index]
  }))
}

let configOptions = (remainLine, rateLine) => {
  let echartData = createData(remainLine, rateLine)

  let xAxisData = echartData.map((v) => v.name)
  let yAxisData1 = echartData.map((v) => v.value1)
  let yAxisData2 = echartData.map((v) => v.value2)
  const hexToRgba = (hex, opacity) => {
    let rgbaColor = ""
    let reg = /^#[\da-f]{6}$/i
    if (reg.test(hex)) {
      rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
        "0x" + hex.slice(3, 5)
      )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`
    }
    return rgbaColor
  }

  return { // return option
    backgroundColor: bgColor,
    color: color,
    legend: {
      right: 10,
      top: 10,
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        let html = ""
        params.forEach((v) => {
          // console.log(v)
          html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                  <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]
            };"></span>
                  ${v.seriesName}
                  <span style="color:${color[v.componentIndex]
            };font-weight:700;font-size: 18px">${v.value}</span>
                  doses`
        })

        return html
      },
      extraCssText:
        "background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;",
      axisPointer: {
        type: "shadow",
        shadowStyle: {
          color: "#ffffff",
          shadowColor: "rgba(225,225,225,1)",
          shadowBlur: 5,
        },
      },
    },
    grid: {
      top: 100,
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#333",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#D9D9D9",
          },
        },
        data: xAxisData,
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Vaccine Tracking",
        axisLabel: {
          textStyle: {
            color: "#666",
          },
        },
        nameTextStyle: {
          color: "#666",
          fontSize: 12,
          lineHeight: 40,
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "#E9E9E9",
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "Remain Vaccine",
        type: "line",
        smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[0],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[0], 0.5),
            shadowOffsetY: 8,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[0], 0.3),
                },
                {
                  offset: 1,
                  color: hexToRgba(color[0], 0.1),
                },
              ],
              false
            ),
            shadowColor: hexToRgba(color[0], 0.1),
            shadowBlur: 10,
          },
        },
        data: yAxisData1,
      },
      {
        name: "Consumption Rate",
        type: "line",
        smooth: true,
        // showSymbol: false,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
          normal: {
            color: color[1],
            shadowBlur: 3,
            shadowColor: hexToRgba(color[1], 0.5),
            shadowOffsetY: 8,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: hexToRgba(color[1], 0.3),
                },
                {
                  offset: 1,
                  color: hexToRgba(color[1], 0.1),
                },
              ],
              false
            ),
            shadowColor: hexToRgba(color[1], 0.1),
            shadowBlur: 10,
          },
        },
        data: yAxisData2,
      },
    ],
  }
}

export {
  configOptions
}