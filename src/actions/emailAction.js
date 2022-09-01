/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-24 22:16:13
 * @LastEditTime: 2022-09-01 01:15:04
 * @LastEditors:  
 */
import emailjs from 'emailjs-com'

const sendRequest = (id) => {
  return {
    type: 'SEND_REQUEST',
    idList: id
  }
}

const sendRemind = (obj) => {
  return {
    type: 'SEND_REMIND',
    obj: obj
  }
}

const requestAction = () => {
  return (dispatch, getState) => {
    const { centreInfo, manInfo, doctorInfo } = getState()
    const ids = []
    const idsDoctor = []

    console.log("enter action, 0", centreInfo[0].isRequesting)

    centreInfo.forEach(item => {
      // First time to detect the vaccines are not enough, send a request email
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

      // First time to detect the vaccines are too much, send a remin email to Doctor
      if (item.initVaccine > 100 && !item.isReminding) {
        const params = {
          centre_name: item.name,
          to_name: doctorInfo[item.doctorList[0]].name,
          // to_email: manInfo[item.doctorList[0]].email,
          message: "We now have a large number of vaccines available, so please contact people in the community to come here and get vaccinated as soon as possible. Many Thanks!"
        }

        // console.log("item.reminding", item.isReminding)

        // emailjs.send('gmail', 'template_lsk9lmi', params, 'Ah0EiXaVqDkRWJm24')
        //   .then((result) => {
        //     console.log("Already send remind email to doctor!")
        //   })
        //   .catch((error) => {
        //     console.log("error", error.text)
        //   })

        dispatch(sendRemind({
          id: item.ID,
          doctor: params.to_name
        }))
      }
    })

    console.log("send emails to man: ", ids)
    if (ids.length) {
      dispatch(sendRequest(ids))
      return ids
    } else return undefined
  }
}

export {
  requestAction
}