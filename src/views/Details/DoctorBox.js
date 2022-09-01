/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-22 00:54:59
 * @LastEditTime: 2022-08-31 18:14:16
 * @LastEditors:  
 */
import { H1, H2, H3, H4, H5, H6 } from "../../components/Typography"
import GroupAvatars from "./Group"

function DoctorBox ({ doctors, rela }) {
  return (
    <div>
      <H3>Doctors</H3>
      {doctors.map((item, index) => {
        return rela.includes(index) ? <H6 key={index}>{item.name}</H6> : null
      })}

      <GroupAvatars maxNum={3} />
    </div>
  )
}

export default DoctorBox