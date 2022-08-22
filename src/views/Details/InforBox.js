/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 22:59:55
 * @LastEditTime: 2022-08-22 01:02:32
 * @LastEditors:  
 */
import { H1, H2, H3, H4 } from "../../components/Typography"

function InforBox ({ centre }) {

  return (
    <div>
      <H1>{centre.name}</H1>
      <H4>{centre.address}</H4>
      <H4>{centre.email}</H4>
      <H4>{centre.phone}</H4>
      <H4>{centre.initVaccine}</H4>
    </div>
  )
}

export {
  InforBox
}