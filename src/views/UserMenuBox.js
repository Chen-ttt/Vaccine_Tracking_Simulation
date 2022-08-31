/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-31 02:34:17
 * @LastEditTime: 2022-08-31 03:38:25
 * @LastEditors:  
 */
import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/system'
import { Icon } from '@mui/material'
import { Link } from 'react-router-dom'
import { AuthContext } from './HomeRoot'
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined'
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined'

const StyledItem = styled(MenuItem)(({ }) => ({
  display: 'flex',
  alignItems: 'center',
  minWidth: 185,
  '& a': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'grey',
    fontWeight: '500',
    marginLeft: '7px'
  },
  '& typography': { marginRight: '10px', color: 'black' },
}))

const UserMenuBox = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const userAuth = React.useContext(AuthContext)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleLogout = () => {
    userAuth.isLogin = false
    userAuth.user = {}
    setAnchorElUser(null)
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <StyledItem onClick={handleCloseUserMenu}>
          <Icon sx={{ color: "#0288d1" }}>
            <ManageAccountsOutlinedIcon />
          </Icon>
          <Link to="/service">
            <Typography> Service </Typography>
          </Link>
        </StyledItem>

        <StyledItem onClick={handleLogout}>
          <Icon sx={{ color: "#0288d1" }}>
            <PowerSettingsNewOutlinedIcon />
          </Icon>
          <Link to="/home">
            <Typography> Logout </Typography>
          </Link>
        </StyledItem>
      </Menu>
    </Box>
  )
}
export default UserMenuBox

