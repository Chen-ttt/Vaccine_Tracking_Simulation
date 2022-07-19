/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-07-18 23:05:35
 * @LastEditTime: 2022-07-19 00:40:51
 * @LastEditors:  
 */
import { makeAutoObservable } from "mobx"

class SelectStore {
  choice = {
    appear: false,
    centre: ''
  }

  constructor() {
    makeAutoObservable(this)
  }

  setChoice = (centreName) => {
    console.log("Form window changed!!!!")
    this.choice.appear = true
    this.choice.centre = centreName
  }

  closeChoice = () => {
    console.log("Form window closed!!!!")
    this.choice.appear = false
    this.choice.centre = ''
  }
}

const selectStore = new SelectStore()
export { selectStore }