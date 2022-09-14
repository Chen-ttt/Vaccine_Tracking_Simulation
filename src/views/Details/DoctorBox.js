/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-22 00:54:59
 * @LastEditTime: 2022-09-14 14:33:19
 * @LastEditors:  
 */
import { H3, H6 } from "../../components/Typography"
import GroupAvatars from "./Group"

function DoctorBox ({ doctors, rela }) {
  return (
    <div>
      <H3>Doctors</H3>
      <br></br>
      {doctors.map((item, index) => {
        return rela.includes(index) ? (
          <div key={index}>
            <H6>{item.name}</H6>
            <H6 marginLeft={"2vw"} marginBottom={"0.7vw"} color="text.secondary">{item.email}</H6>
          </div>
        ) : null
      })}

      <GroupAvatars maxNum={6} />
    </div>
  )
}

export default DoctorBox