/*
 * @Description: 
 * @Author: Tong Chen
 * @Date: 2022-08-25 23:45:14
 * @LastEditTime: 2022-08-31 13:59:53
 * @LastEditors:  
 */
import * as React from 'react'
import Stack from '@mui/material/Stack'
// import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert (props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function CustomizedSnackbars ({ state, message }) {
  const [open, setOpen] = React.useState(true)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  if (state === "info") message = "Login Successful!"
  //     "success": () => (params.amount + " vaccines have been sent to " + params.centre)

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={state} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      {/* <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  )
}
