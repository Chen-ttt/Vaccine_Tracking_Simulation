/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 02:08:27
 * @LastEditTime: 2022-09-14 01:12:20
 * @LastEditors:  
 */
import { Card, styled, useTheme } from '@mui/material'

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '0px !important',
  // background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '10px !important' },
}))

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '0px',
  padding: '0px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '0px !important' },
}))

export {
  StyledCard,
  CardRoot
}