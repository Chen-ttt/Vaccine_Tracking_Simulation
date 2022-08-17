/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 17:11:16
 * @LastEditTime: 2022-08-17 16:27:17
 * @LastEditors:  
 */
const initState = () => {
  console.log("enter initState")
  return {
    centreInfo: null
  }
}

const vaccineReducer = (state = initState(), action) => {
  console.log("enter Reducer")
  switch (action.type) {
    case 'GET_CENTRE': {
      console.log("enter reducer", action, state)
      return {
        ...state,
        centreInfo: action.centreInfo
      }
    }

    default: {
      console.log("enter default")
      return state
    }
  }
}

export {
  vaccineReducer
}