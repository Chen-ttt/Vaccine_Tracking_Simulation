/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-22 22:32:57
 * @LastEditTime: 2022-08-22 23:06:24
 * @LastEditors:  
 */

import { styled } from '@mui/material'

export const RemainTag = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '8px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))