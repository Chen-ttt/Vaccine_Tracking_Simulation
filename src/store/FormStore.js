/*
 * @Description: Form Store to Send Supply Email
 * @Author: Tong Chen
 * @Date: 2022-07-18 23:05:35
 * @LastEditTime: 2022-07-19 17:30:32
 * @LastEditors:  
 */
import { makeAutoObservable } from "mobx"
import emailjs from 'emailjs-com'

class FormStore {
  form = {
    centre: '',
    code: '',
    driver: '',
    amount: 0
  }

  constructor() {
    makeAutoObservable(this)
  }

  setForm = (centre, state) => {
    this.form.centre = state.centre
    this.form.code = state.code
    this.form.driver = state.driver
    this.form.amount = state.amount
    console.log("After setting", this.form.code)
  }

  sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('gmail', 'template_utnmhlb', e.target, 'Ah0EiXaVqDkRWJm24')
      .then((result) => {
        console.log("Remind email send!")
      }, (error) => {
        console.log(error.text)
      })
  }


}

const formStore = new FormStore()
export { formStore }