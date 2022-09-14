/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-22 00:54:59
 * @LastEditTime: 2022-09-14 00:14:44
 * @LastEditors:  
 */
import { H1, H2, H3, H4, H5, H6 } from "../../components/Typography"
import GroupAvatars from "./Group"

function DoctorBox ({ doctors, rela }) {
  return (
    <div>
      <H3>Doctors</H3>
      <br></br>
      {doctors.map((item, index) => {
        return rela.includes(index) ? (
          <div>
            <H6 key={index}>{item.name}</H6>
            <H6 key={index} marginLeft={"2vw"} marginBottom={"0.7vw"} color="text.secondary">{item.email}</H6>
          </div>
        ) : null
      })}

      <GroupAvatars maxNum={6} />
    </div>
  )
}

export default DoctorBox