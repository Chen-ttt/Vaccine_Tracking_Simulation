/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 18:20:31
 * @LastEditTime: 2022-08-21 18:30:24
 * @LastEditors:  
 */

import { styled, Box, Grid, Button, ThemeProvider, createTheme, List, ListItem, ListItemButton, ListItemIcon, Card } from "@mui/material"
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'

const StyledButton = styled(Button)(({ theme }) => ({
  bgcorlor: '#1565c0',
}))

const MenuButton = () => {
  const data = [
    { icon: <WbSunnyOutlinedIcon />, label: "Home", path: "dayTodo" },
    { icon: <CalendarTodayOutlinedIcon />, label: "Service", path: "recentlyTodo" },
  ]

  return (
    <Grid item xs={2} >
      {data.map((item, index) => {
        return (
          <StyledButton key={index}>{item.label}</StyledButton>
        )
      })}
    </Grid>
  )
}

export {
  MenuButton
}