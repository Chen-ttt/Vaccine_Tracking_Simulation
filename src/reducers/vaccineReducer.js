/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 17:11:16
 * @LastEditTime: 2022-08-21 23:55:57
 * @LastEditors:  
 */

const initState = () => {
  return {
    centreInfo: null,
    manInfo: null
  }
}

const vaccineReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'GET_CENTRE': {
      action.centreInfo.forEach(item => {
        item.remainLine = [item.initVaccine]
      })

      return {
        centreInfo: action.centreInfo,
        timerID: action.timerID
      }
    }

    case 'GET_MANUFACTURER': {
      return {
        ...state,
        manInfo: action.manInfo
      }
    }

    case 'GET_DOCTOR': {
      return {
        ...state,
        doctorInfo: action.doctorInfo
      }
    }

    case 'CLEAR_TIMER': {
      console.log("clear")
      clearInterval(state.timerID)
      return state
    }

    case 'CONSUME_VACCINE': {
      let temp = state.centreInfo.map(item => ({
        ...item,
        initVaccine: item.initVaccine - item.rateComsumption,
        remainLine: [...item.remainLine, item.initVaccine]
      }))

      console.log("consume", temp)

      return {
        ...state,
        centreInfo: temp
      }
    }

    default: {
      return state
    }
  }
}

export {
  vaccineReducer
}