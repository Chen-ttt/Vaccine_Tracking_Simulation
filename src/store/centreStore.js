/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-19 16:34:18
 * @LastEditTime: 2022-08-19 16:44:38
 * @LastEditors:  
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { vaccineReducer } from '../reducers/vaccineReducer'
import { initCentreDB } from '../actions/consumeAction'

const centreStore = createStore(vaccineReducer, applyMiddleware(thunk))
centreStore.dispatch(initCentreDB())

export {
  centreStore
}