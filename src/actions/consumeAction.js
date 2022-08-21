/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 16:43:08
 * @LastEditTime: 2022-08-21 23:57:22
 * @LastEditors:  
 */

import axios from "axios"
import "../mockDatabase/centresDB"
import "../mockDatabase/manufacturersDB"
import "../mockDatabase/doctorDB"

const initCentreDB = () => {
  return (dispatch, getState) => {
    axios.get('/centreMock', { dataType: 'json' })
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
    axios.get('/manufacturerMock', { dataType: 'json' })
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
    axios.get('/doctorMock', { dataType: 'json' })
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

const consumeAction = (rate) => {
  return {
    type: 'CONSUME_VACCINE'
  }
}

const clearAction = () => {
  return {
    type: 'CLEAR_TIMER'
  }
}

export {
  initCentreDB,
  clearAction,
  consumeAction,
  initManDB,
  initDoctorDB
}