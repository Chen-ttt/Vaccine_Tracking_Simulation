/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 17:11:16
 * @LastEditTime: 2022-09-14 01:20:20
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

const getCurTime = (timer) => {
  return timer.day + " " + timer.month + " " + (timer.hour > 12 ? (timer.hour - 12) + "pm" : timer.hour + "am")
}

const vaccineReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'GET_CENTRE': {
      action.centreInfo.forEach(item => {
        item.remainLine = [item.initVaccine]
        item.rateLine = [item.rateComsumption]
        item.isRequesting = false // true means this centre has sent an request email
        item.isDeliverying = false // true means there are some vaccines delivery to this centre
        item.isReminding = false // true means this centre has sent an reminder email
        item.deliveryInfo = [] // Array includes different delivery and reminder news
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
      console.log("test", action.manInfo)
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
      if (state.globalTimer.hour === 24) {
        state.globalTimer.day++
        state.globalTimer.hour = 0
      } else state.globalTimer.hour++

      const hour = state.globalTimer.hour

      let temp = state.centreInfo.map(item => {
        if (hour < 9 || hour > 19) item.rateComsumption = 0
        else if ((hour >= 9 && hour <= 12) || (hour > 14 && hour <= 17)) {
          item.rateComsumption = Math.floor(item.centreLevel + item.population * 0.01 + item.initVaccine * 0.02)

        }
        else if ((hour > 12 && hour <= 14) || (hour > 17 && hour <= 19)) {
          item.rateComsumption = Math.floor(item.centreLevel + item.population * 0.01 + item.initVaccine * 0.05)
        }

        if (item.isReminding) {
          item.rateComsumption *= 2
          if (item.initVaccine < 40) item.isReminding = false
        }

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

      return {
        ...state,
        globalTimer: {
          ...state.globalTimer
        },
        centreInfo: temp
      }
    }

    case 'DELIVERY_VACCINE': {
      console.log("enter delivery", action.man, typeof (action.man))
      let temp = state.centreInfo.map((item, index) => {
        if (index === action.id) {
          return {
            ...item,
            isDeliverying: true,
            deliveryInfo: [...item.deliveryInfo, {
              man: state.manInfo[action.man].name,
              amount: action.amount,
              bool: false,
              time: getCurTime(state.globalTimer)
            }]
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

      state.centreInfo.forEach(item => {
        if (action.idList.includes(item.ID)) {
          console.log("send! centre id", item.ID)
          item.isRequesting = true
        }
      })

      return state // no need to update views, just revise database
    }

    case 'DELIVERY_SENDED': {
      console.log("enter DELIVERY_SENDED")
      let temp = state.centreInfo.map((item, index) => {
        if (index === action.id) {
          return {
            ...item,
            initVaccine: item.initVaccine += action.amount,
            isDeliverying: false,
            deliveryInfo: [...item.deliveryInfo, {
              man: state.manInfo[action.man].name,
              amount: action.amount,
              bool: true,
              time: getCurTime(state.globalTimer)
            }]
          }
        } else return item
      })

      console.log("delivery!!!", action.id, temp)

      return {
        ...state,
        centreInfo: temp
      }
    }

    case 'SEND_REMIND': {
      console.log("enter SEND_REMIND")

      const cur = state.centreInfo[action.obj.id]
      cur.isReminding = true
      cur.deliveryInfo.push({
        doctor: action.obj.doctor,
        time: getCurTime(state.globalTimer)
      })

      console.log("cur", cur)

      return state
    }

    default: {
      return state
    }
  }
}

export {
  vaccineReducer
}