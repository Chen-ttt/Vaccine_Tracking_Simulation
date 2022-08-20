/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 17:11:16
 * @LastEditTime: 2022-08-20 00:45:13
 * @LastEditors:  
 */
import { consumeAction } from '../actions/consumeAction'

const initState = () => {
  return {
    centreInfo: null
  }
}

const vaccineReducer = (state = initState(), action) => {
  switch (action.type) {
    case 'GET_CENTRE': {
      // console.log("enter reducer", action, state)
      // set timers for consumption
      // let timerIDs = []
      // action.centreInfo.forEach(item => {
      //   timerIDs.push(
      //     setInterval(() => {
      //       item.initVaccine -= 5
      //       console.log(item.initVaccine)
      //     }, 5000)
      //   )
      // })

      return {
        centreInfo: action.centreInfo,
        timerID: action.timerID
      }
    }

    case 'CLEAR_TIMER': {
      // state.timerID.forEach(item => {
      //   console.log("clear")
      //   clearInterval(item)
      // })
      console.log("clear")
      clearInterval(state.timerID)
      return state
    }

    case 'CONSUME_VACCINE': {
      state.centreInfo.forEach(item => {
        item.initVaccine -= item.rateComsumption
        console.log("consume", item.initVaccine)
      })

      return {
        ...state,
        centreInfo: state.centreInfo
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