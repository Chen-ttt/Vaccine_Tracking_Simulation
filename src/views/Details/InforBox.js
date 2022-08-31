/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 22:59:55
 * @LastEditTime: 2022-08-31 17:32:51
 * @LastEditors:  
 */
import { H1, H2, H3, H4 } from "../../components/Typography"
import { Icon } from "@mui/material"
import PinDropIcon from '@mui/icons-material/PinDrop'
import * as React from 'react'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'

function InforBox ({ centre }) {
  const iconColor = "#ffa733"
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardMedia
          component="img"
          sx={{ width: 270 }}
          image="/photo/1.jpg"
          alt="Live from space album cover"
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <H1>{centre.name}</H1>
          <Icon sx={{ color: iconColor }}>
            <PinDropIcon sx={{ fontSize: 20 }} />
          </Icon>
          <H4 color="text.secondary">{centre.address}</H4>

          <br />
          <Icon sx={{ color: iconColor }}>
            <AlternateEmailIcon sx={{ fontSize: 20 }} />
          </Icon>
          <H4 color="text.secondary">{centre.email}</H4>

          <br />
          <Icon sx={{ color: iconColor }}>
            <PhoneInTalkIcon sx={{ fontSize: 20 }} />
          </Icon>
          <H4 color="text.secondary">{centre.phone}</H4>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

        </Box>
      </Box>

    </div>
  )
}

export {
  InforBox
}