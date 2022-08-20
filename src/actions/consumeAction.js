/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 16:43:08
 * @LastEditTime: 2022-08-20 00:35:36
 * @LastEditors:  
 */

import axios from "axios"
import "../mockDatabase/centresDB"

// const getCentreAction = (data) => {
//   console.log("entre get Centre action")
//   return {
//     type: 'GET_CENTRE',
//     centreInfo: data
//   }
// }

const initCentreDB = () => {
  return (dispatch, getState) => {
    axios.get('/centreMock', { dataType: 'json' })
      .then(res => {
        console.log("Success to mock centre database! ")
        return res.data.centreInfo
      })
      .then(data => {
        // let timerIDs = []
        // data.forEach(item => {
        //   timerIDs.push(
        //     setInterval(() => {
        //       // item.initVaccine -= 5
        //       console.log(item.initVaccine)
        //       dispatch(consumeAction(item.rateComsumption))
        //     }, 5000)
        //   )
        // })

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
  consumeAction
}