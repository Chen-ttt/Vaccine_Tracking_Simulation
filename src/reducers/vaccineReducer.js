/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 17:11:16
 * @LastEditTime: 2022-08-30 18:58:57
 * @LastEditors:  
 */

const initState = () => {
  return {
    globalTimer: null,
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
        item.isRequesting = false // true means this centre has sent an request email
        item.isDeliverying = false // true means there are some vaccines delivery to this centre
        item.deliveryInfo = []
      })

      return {
        ...state,
        globalTimer: {
          month: "Sep.",
          day: 1,
          hour: 0
        },
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
      let temp = state.centreInfo.map(item => {
        if (item.initVaccine === 0) {
          return {
            ...item,
            remainLine: [...item.remainLine, 0],
            rateLine: [...item.rateLine, 0]
          }
        }
        if (item.initVaccine > item.rateComsumption) {
          return {
            ...item,
            initVaccine: item.initVaccine - item.rateComsumption,
            remainLine: [...item.remainLine, item.initVaccine],
            rateLine: [...item.rateLine, item.rateComsumption]
          }
        } else {
          return {
            ...item,
            initVaccine: 0,
            rateComsumption: 0,
            remainLine: [...item.remainLine, 0],
            rateLine: [...item.rateLine, 0]
          }
        }
      })

      console.log("consume", temp)

      if (state.globalTimer.hour === 24) {
        state.globalTimer.day++
        state.globalTimer.hour = 0
      } else state.globalTimer.hour++

      return {
        ...state,
        globalTimer: {
          ...state.globalTimer
        },
        centreInfo: temp
      }
    }

    case 'DELIVERY_VACCINE': {
      let temp = state.centreInfo.map((item, index) => {
        if (index === action.id) {
          return {
            ...item,
            // initVaccine: item.initVaccine += action.amount,
            isDeliverying: true,
            deliveryInfo: [...item.deliveryInfo, { man: action.man, amount: action.amount }]
          }
        } else return item
      })

      console.log("deliverying!!!", action.id, temp)

      return {
        ...state,
        centreInfo: temp
      }
    }

    case 'SEND_REQUEST': {
      console.log("enter send request reducer")
      // let temp = state.centreInfo.map(item => {
      //   console.log("idList", action.idList, "item.id", item.ID, "match?", action.idList.includes(item.ID))
      //   if (action.idList.includes(item.ID)) {
      //     console.log("send! centre id", item.ID)
      //     return {
      //       ...item,
      //       isRequesting: true
      //     }
      //   } else return item
      // })

      state.centreInfo.forEach(item => {
        // console.log("idList", action.idList, "item.id", item.ID, "match?", action.idList.includes(item.ID))
        if (action.idList.includes(item.ID)) {
          console.log("send! centre id", item.ID)
          item.isRequesting = true
        }
      })

      return state
      // return {
      //   ...state,
      //   centreInfo: temp
      // }
    }

    case 'DELIVERY_SENDED': {
      console.log("enter DELIVERY_SENDED")
      let temp = state.centreInfo.map((item, index) => {
        if (index === action.id) {
          return {
            ...item,
            initVaccine: item.initVaccine += action.amount,
            isDeliverying: false,
            deliveryInfo: [...item.deliveryInfo, { man: action.man, amount: action.amount }]
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