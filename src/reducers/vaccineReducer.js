/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 17:11:16
 * @LastEditTime: 2022-08-22 03:37:24
 * @LastEditors:  
 */

const initState = () => {
  return {
    centreInfo: null,
    manInfo: null,
    doctorInfo: null
  }
}

const vaccineReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'GET_CENTRE': {
      action.centreInfo.forEach(item => {
        item.remainLine = [item.initVaccine]
        item.rateLine = [item.rateComsumption]
      })

      return {
        ...state,
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
        remainLine: [...item.remainLine, item.initVaccine],
        rateLine: [...item.rateLine, item.rateComsumption]
      }))

      console.log("consume", temp)

      return {
        ...state,
        centreInfo: temp
      }
    }

    case 'DELIVERY_VACCINE': {
      let temp = state.centreInfo.map((item, index) => {
        console.log("matching", typeof (action.amount))
        if (index === action.id) {
          console.log("match", item.name)
          return {
            ...item,
            initVaccine: item.initVaccine += action.amount
          }
        } else return item
      })

      console.log("delivery!!!", action.id, temp)

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