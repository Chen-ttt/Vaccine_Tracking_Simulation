/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-09-14 00:18:14
 * @LastEditTime: 2022-09-14 01:14:02
 * @LastEditors:  
 */
let option = {
  grid: { top: '5%', bottom: '5%', left: '35%', right: '0%' },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none',
    },
    formatter (param) {
      param.pop()

      console.log(param)
      return param
    },
  },
  xAxis: {
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: false,
    },
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'category',

    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: '#555',
      margin: 15,
    },

    data: ['Sogotec UVA', 'Little Giant', 'MPGL Ltd', 'Riley Ltd', 'H & J Factory', 'Watson-Marlow', 'Ancoats Factory'],
  },
  series: [
    {
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [20, 182, 191, 200, 190, 330, 450],
    },
    {
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [120, 182, 191, 20, 180, 330, 680],
    },
    {
      type: 'bar',
      stack: 'total',
      barWidth: 20,
      data: [220, 182, 191, 40, 20, 400, 120],
    },
    // {
    //   type: 'bar',
    //   stack: 'total',
    //   barWidth: 26,
    //   data: [320, 182, 191, 234, 290, 330, 310],
    // },
    // {
    //   type: 'bar',
    //   stack: 'total',
    //   barWidth: 26,
    //   data: [420, 182, 191, 234, 290, 330, 310],
    // },

    // total
    {
      type: 'bar',
      zlevel: -1,
      barWidth: 26,
      barGap: '-100%',
      label: {
        show: true,
        position: 'right',
        distance: 8,
      },
      itemStyle: {
        color: 'transparent',
      },
      emphasis: {
        itemStyle: {
          borderWidth: 4,
          borderColor: '#fff',
          shadowColor: '#5448F2',
          shadowBlur: 8,
        },
      },
      data: [360, 546, 573, 260, 390, 1060, 1250],
    },
  ],
}

export default option
