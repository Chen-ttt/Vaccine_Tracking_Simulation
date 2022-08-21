/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 15:46:03
 * @LastEditTime: 2022-08-21 23:35:26
 * @LastEditors:  
 */
import { centresName } from "./config"

var Mock = require('mockjs')
var centreData = Mock.mock("/centreMock", {
  "centreInfo|6": [{
    // 1. Unique ID
    "ID|+1": 0,

    // 2. name
    "name|+1": centresName,

    // 3. address
    "address": function () {
      return "S" + Mock.Random.integer(1, 5) + " " + Mock.Random.integer(1, 5) + Mock.Random.string("upper", 2)
    },

    // 4. distance
    "distance|1-10.1": 1,

    // 5. email
    "email": "tchen64@sheffield.ac.uk",

    // 6. phone
    "phone": function () {
      return Mock.Random.pick(["0114", "0161"]) + Mock.mock(/ \d{3} \d{4}/)
    },

    // 7. opening
    "openTime": function () {
      return Mock.Random.pick(["8", "9", "10"]) + "am - " + Mock.Random.pick(["5", "6", "7"]) + "pm"
    },

    // 8. centreLLevel
    "centreLevel|1-5": 1,

    // 9. population
    "population": function () {
      if (this.areaLevel === 1) return Mock.Random.integer(20, 100)
      else if (this.areaLevel === 2) return Mock.Random.integer(101, 300)
      else if (this.areaLevel === 3) return Mock.Random.integer(301, 600)
      else if (this.areaLevel === 4) return Mock.Random.integer(601, 1000)
      else if (this.areaLevel === 5) return Mock.Random.integer(1001, 1500)
    },

    // 10. max storage
    "maxStorage": function () {
      return this.centreLevel * 30
    },

    // 11. initial number of vaccines
    "initVaccine|40-600": 1,

    "rateComsumption": 10
  }]
})

export default centreData