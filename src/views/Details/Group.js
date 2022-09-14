/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-31 03:01:43
 * @LastEditTime: 2022-09-14 00:16:03
 * @LastEditors:  
 */
import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
// import A from "./distance.png"

export default function GroupAvatars ({ maxNum }) {
  console.log("maxNum", maxNum)
  return (
    <AvatarGroup max={maxNum}>
      <Avatar alt="Remy Sharp" src="/user/1.png" />
      <Avatar alt="Travis Howard" src="/user/2.png" />
      <Avatar alt="Cindy Baker" src="/user/3.png" />
      <Avatar alt="Agnes Walker" src="/user/4.png" />
      <Avatar alt="Trevor Henderson" src="/user/5.png" />
      <Avatar alt="Trevor Henderson" src="/user/6.png" />
    </AvatarGroup>
  )
}
