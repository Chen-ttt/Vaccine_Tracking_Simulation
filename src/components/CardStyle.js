/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-21 02:08:27
 * @LastEditTime: 2022-08-21 02:08:55
 * @LastEditors:  
 */
import { Card, styled, useTheme } from '@mui/material'

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  position: 'relative',
  padding: '24px !important',
  // background: `rgb(${convertHexToRGB(theme.palette.primary.main)}, 0.15) !important`,
  [theme.breakpoints.down('sm')]: { padding: '16px !important' },
}))

const CardRoot = styled(Card)(({ theme }) => ({
  marginBottom: '24px',
  padding: '24px !important',
  [theme.breakpoints.down('sm')]: { paddingLeft: '16px !important' },
}))

export {
  StyledCard,
  CardRoot
}