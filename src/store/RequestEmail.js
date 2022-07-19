/*
 * @Description: Email Store for Sending Request Email to Manufacture
 * @Author: Tong Chen
 * @Date: 2022-07-19 00:42:18
 * @LastEditTime: 2022-07-19 17:31:11
 * @LastEditors:  
 */

import emailjs from 'emailjs-com'

class RequestEmail {
  data = {
    centre_name: '',
    to_name: '',
    to_email: ''
  }

  constructor() {
  }

  setRequestContact = (name, to_name, to_email) => {
    this.data.centre_name = name
    this.data.to_name = to_name
    this.data.to_email = to_email
    this.sendRequestEmail()
  }

  sendRequestEmail = () => {
    // emailjs.send('gmail', 'template_v8xa3qe', this.data, 'Ah0EiXaVqDkRWJm24')
    //   .then((result) => {
    //     console.log("Already send request to nearest manufacture!")
    //   }, (error) => {
    //     console.log(error.text)
    //   })
  }
}

const requestEmail = new RequestEmail()
export { requestEmail }

