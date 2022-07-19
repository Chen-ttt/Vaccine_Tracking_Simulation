/*
 * @Description: Auto Data of Selected Centre to Control Apperence of Delivery Form
 * @Author: Tong Chen
 * @Date: 2022-07-18 23:05:35
 * @LastEditTime: 2022-07-19 17:31:57
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