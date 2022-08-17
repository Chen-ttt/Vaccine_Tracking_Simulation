/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 16:43:08
 * @LastEditTime: 2022-08-17 16:30:07
 * @LastEditors:  
 */

import axios from "axios"
import "../mockDatabase/centresDB"

const getCentreAction = (data) => {
  console.log("entre get Centre action")
  return {
    type: 'GET_CENTRE',
    centreInfo: data
  }
}

const getCentreDB = () => {
  console.log("entre get CentreDB")
  return (dispatch, getState) => {
    axios.get('/centreMock', { dataType: 'json' })
      .then((res) => {
        console.log("Success to mock! ", res.data.centreInfo)
        dispatch({
          type: 'GET_CENTRE',
          centreInfo: res.data.centreInfo
        })
      })
      .catch((err) => {
        console.log("Fail to mock database: ", err)
      })
  }
}

export {
  getCentreDB
}