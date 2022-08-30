/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 16:43:08
 * @LastEditTime: 2022-08-30 18:59:00
 * @LastEditors:  
 */

import axios from "axios"
const pathPrefix = "http://localhost:3003"

const initCentreDB = () => {
  return (dispatch, getState) => {
    axios.get(pathPrefix + '/mockCentre.action', { dataType: 'json' })
      .then(res => {
        console.log("Success to mock centre database! ")
        return res.data.centreInfo
      })
      .then(data => {
        let timerID = setInterval(() => {
          dispatch(consumeAction())
        }, 5000)

        dispatch({
          type: 'GET_CENTRE',
          centreInfo: data,
          timerID: timerID
        })
      })
      .catch((err) => {
        console.log("Fail to mock centre database: ", err)
      })
  }
}

const initManDB = () => {
  return (dispatch, getState) => {
    axios.get(pathPrefix + '/mockMan.action', { dataType: 'json' })
      .then(res => {
        console.log("Success to mock Man database! ")
        return res.data.manufacturerInfo
      })
      .then(data => {
        dispatch({
          type: 'GET_MANUFACTURER',
          manInfo: data
        })
      })
      .catch((err) => {
        console.log("Fail to mock Man database: ", err)
      })
  }
}

const initDoctorDB = () => {
  return (dispatch, getState) => {
    axios.get(pathPrefix + '/mockDoctor.action', { dataType: 'json' })
      .then(res => {
        console.log("Success to mock Doctor database! ")
        return res.data.doctorInfo
      })
      .then(data => {
        dispatch({
          type: 'GET_DOCTOR',
          doctorInfo: data
        })
      })
      .catch((err) => {
        console.log("Fail to mock Doctor database: ", err)
      })
  }
}

const consumeAction = () => {
  return {
    type: 'CONSUME_VACCINE'
  }
}

const affactRateAction = () => {
  return {
    type: 'AFFECT_RATE'
  }
}

const clearAction = () => {
  return {
    type: 'CLEAR_TIMER'
  }
}

const deliveryAction = (amount, centreId, manId) => {
  return {
    type: "DELIVERY_VACCINE",
    amount: amount,
    id: centreId,
    man: manId
  }
}

const suppliedAction = (amount, centreId, manId) => {
  return {
    type: "DELIVERY_SENDED",
    amount: amount,
    id: centreId,
    man: manId
  }
}

export {
  initCentreDB,
  clearAction,
  consumeAction,
  initManDB,
  initDoctorDB,
  affactRateAction,
  deliveryAction,
  suppliedAction
}