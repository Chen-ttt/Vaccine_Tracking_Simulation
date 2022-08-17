/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-13 15:46:44
 * @LastEditTime: 2022-08-13 15:46:54
 * @LastEditors:  
 */
var Mock = require('mockjs')
var manufacturerData = Mock.mock("/manufacturerMock", {
  "manufacturerInfo|3": [{
    // 1. Unique ID
    "ID|+1": 1,

    // 2. name
    "name|+1": ["NISSIN Easson Factory", "TOYO Enterprise", "CNC-Takag Formi", "Awea Matech", "Sogotec UVA", "Leadwell Laser", "Palmary Virker", "Little Giant", "Spring Factory", "Hendersons Relish"],

    // 3. address
    "address": function () {
      return "S" + Mock.Random.integer(1, 5) + " " + Mock.Random.integer(1, 5) + Mock.Random.string("upper", 2)
    },

    // 4. email
    "email": "tchen64@sheffield.ac.uk",

    // 5. phone
    "phone": function () {
      return Mock.Random.pick(["0114", "0161"]) + Mock.mock(/ \d{3} \d{4}/)
    }
  }]
})

export default manufacturerData