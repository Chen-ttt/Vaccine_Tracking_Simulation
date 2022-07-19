/*
 * @Description: Database of Centres & Set Timer to simulate vaccine consumption
 * @Author: Tong Chen
 * @Date: 2022-07-19 01:50:57
 * @LastEditTime: 2022-07-19 17:29:57
 * @LastEditors:  
 */
import { makeAutoObservable } from "mobx"
import { requestEmail } from "./RequestEmail"


const threshold = 30

class CentreStore {
  timer = null
  centreList = [
    {
      name: 'Welfare Pharmacy',
      openTime: '9am-6pm',
      location: 'S1 4UB',
      amount: 40,
      distance: '0.8',
      rateComsumption: 5,
      waitState: false,
      manufacture: 'DQ Manufacture',
      manufactureEmail: 'tchen64@sheffield.ac.uk'
    },
    {
      name: 'Stubley Medical Centre',
      openTime: '8am-6pm',
      location: 'S1 4UB',
      amount: '78',
      distance: '5.3',
      rateComsumption: 5,
      waitState: false,
      manufacture: 'DQ Manufacture',
      manufactureEmail: 'tchen64@sheffield.ac.uk'
    },
    {
      name: 'Seven Hills Pharmacy',
      openTime: '9am-6pm',
      location: 'S1 4UB',
      amount: '115',
      distance: '6.5',
      rateComsumption: 3,
      waitState: false,
      manufacture: 'DQ Manufacture',
      manufactureEmail: 'tchen64@sheffield.ac.uk'
    },
    {
      name: 'Archway Pharmacy',
      openTime: '9am-6:30pm',
      location: 'S1 4UB',
      amount: '150',
      distance: '7.1',
      rateComsumption: 10,
      waitState: false,
      manufacture: 'DQ Manufacture',
      manufactureEmail: 'tchen64@sheffield.ac.uk'
    },
    {
      name: 'Good Measure Pharmacy',
      openTime: '8am-6pm',
      location: 'S1 4UB',
      amount: '204',
      distance: '0.89',
      rateComsumption: 6,
      waitState: false,
      manufacture: 'DQ Manufacture',
      manufactureEmail: 'tchen64@sheffield.ac.uk'
    },
    {
      name: 'St. Peter & St. Oswald\'s Church',
      openTime: '8am-6pm',
      location: 'S1 4UB',
      amount: '0',
      distance: '1.9',
      rateComsumption: 0,
      waitState: true,
      manufacture: 'DQ Manufacture',
      manufactureEmail: 'tchen64@sheffield.ac.uk'
    },
    {
      name: 'Brookside Pharmacy',
      openTime: '9am-6pm',
      location: 'S1 4UB',
      amount: '65',
      distance: '0.7',
      rateComsumption: 10,
      waitState: false,
      manufacture: 'DQ Manufacture',
      manufactureEmail: 'tchen64@sheffield.ac.uk'
    },

  ]

  constructor() {
    makeAutoObservable(this)
    this.timer = setInterval(() => {
      this.centreList.map((item) => {
        if (item.amount >= item.rateComsumption) {
          item.amount -= item.rateComsumption
          if (item.amount < threshold && !item.waitState) {
            console.log(item.name, "'s vaccines are not enough!!!")
            requestEmail.setRequestContact(item.name, item.manufacture, item.manufactureEmail)
            item.waitState = true
          }
        }
        console.log(item.name, item.amount)
      })
    }, 5000)
  }

  stopConsumption = () => {
    console.log("stop timer", this.timer)
    clearInterval(this.timer)
  }

}

const centreStore = new CentreStore()
export { centreStore }