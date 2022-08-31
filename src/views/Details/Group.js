/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-31 03:01:43
 * @LastEditTime: 2022-08-31 03:06:30
 * @LastEditors:  
 */
import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
// import A from "./distance.png"

export default function GroupAvatars () {
  return (
    <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="./distance.png" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
  )
}
