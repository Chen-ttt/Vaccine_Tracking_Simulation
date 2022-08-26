/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-24 22:16:13
 * @LastEditTime: 2022-08-26 01:20:40
 * @LastEditors:  
 */
import emailjs from 'emailjs-com'

const sendRequest = (id) => {
  return {
    type: 'SEND_REQUEST',
    idList: id
  }
}

const requestAction = () => {
  return (dispatch, getState) => {
    const { centreInfo, manInfo, doctorInfo } = getState()
    const ids = []

    console.log("enter action, 0", centreInfo[0].isRequesting)

    centreInfo.forEach(item => {
      // it's first time to detect the vaccines are not enough, send a request email
      if (item.initVaccine < 20 && !item.isRequesting && !item.isDeliverying) {
        const params = {
          centre_name: item.name,
          to_name: manInfo[item.manList[0]].name,
          to_email: manInfo[item.manList[0]].email
        }

        // emailjs.send('gmail', 'template_v8xa3qe', params, 'Ah0EiXaVqDkRWJm24')
        //   .then((result) => {
        //     console.log("Already send request email!")
        //     ids.push(item.ID)
        //   })
        //   .catch((error) => {
        //     console.log("error", error.text)
        //   })

        console.log("Already send a request email")
        ids.push(item.ID)
      }
    })

    console.log("send emails for: ", ids)
    // really send emails, conduct Action
    if (ids.length) {
      dispatch(sendRequest(ids))
      return ids
    } else return undefined
  }
}

export {
  requestAction
}