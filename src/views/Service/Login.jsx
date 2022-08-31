import { LoadingButton } from '@mui/lab'
import { Card, Checkbox, Grid, TextField } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Paragraph } from '../../components/Typography'
import { Formik } from 'formik'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Background from '../../meeting.png'
import { AuthContext } from '../HomeRoot'
import React from 'react'
import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { centreStore } from '../../store/centreStore'
import CustomizedSnackbars from '../../components/MessageBar'

const FlexBox = styled(Box)(() => ({ display: 'flex', alignItems: 'center' }))

const JustifyBox = styled(FlexBox)(() => ({
  justifyContent: 'center',
}))

const ContentBox = styled(Box)(() => ({
  height: '100%',
  padding: '32px',
  position: 'relative',
  // background: 'rgba(0, 0, 0, 0.01)',
}))

const BackgroundBox = styled('div')(() => ({
  backgroundImage: `url(${Background})`,
  fontSize: '20px',
  width: '100vw',
  height: '95vh',
}))

const JWTRoot = styled(JustifyBox)(() => ({
  zIndex: 9999,
  background: 'rgba(255, 255, 255, 0.3)',
  minHeight: '95vh !important',
  '& .card': {
    maxWidth: '100vw',
    minHeight: 400,
    margin: '1rem',
    display: 'flex',
    borderRadius: 12,
    alignItems: 'center',
  },
}))

// inital login credentials
const initialValues = {
  username: 's35wz',
  password: 'dummyPass',
  remember: true,
}

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
  // email: Yup.string()
  //   .email('Invalid Email address')
  //   .required('Email is required!'),
})

const ServiceLogin = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const userAuth = React.useContext(AuthContext)
  const [isMsg, setIsMsg] = useState(false)
  const [msgDom, setMsgDom] = useState(null)
  const msgDivRef = useRef(null)

  useEffect(() => {
    if (msgDom === null) {
      setMsgDom(createRoot(msgDivRef.current))
    }

    if (msgDom && isMsg) {
      msgDom.render(
        <CustomizedSnackbars
          state={'error'}
          message={'Login Failed. Plz Try Again.'}
        />
      )
      setIsMsg(false)
      setLoading(false)
    }
  }, [isMsg])

  // Check username and password
  const { manInfo } = centreStore.getState()
  let login = (username, password) => {
    return manInfo.some((item) => {
      return item.username === username && item.password === password
    })
  }

  // Login Success and Fail
  const handleFormSubmit = (values) => {
    setLoading(true)
    try {
      if (login(values.username, values.password)) {
        userAuth.isLogin = true
        userAuth.user = {
          username: values.username,
          passord: values.passord,
        }
        navigate('/service')
      } else {
        console.log('login fail')
        setIsMsg(true)
      }
    } catch (e) {
      setLoading(false)
    }
  }

  return (
    <BackgroundBox>
      <div ref={msgDivRef}></div>
      <JWTRoot>
        <Card className="card">
          <Grid container>
            <Grid item sm={6} xs={12}>
              <JustifyBox p={4} height="100%" sx={{ minWidth: 320 }}>
                <img
                  src="/assets/images/illustrations/dreamer.svg"
                  width="100%"
                  alt=""
                />
              </JustifyBox>
            </Grid>

            <Grid item sm={6} xs={12}>
              <ContentBox>
                <Formik
                  onSubmit={handleFormSubmit}
                  initialValues={initialValues}
                  validationSchema={validationSchema}>
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <TextField
                        fullWidth
                        size="small"
                        type="string"
                        name="username"
                        label="Username"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.username}
                        onChange={handleChange}
                        // helperText={touched.email && errors.email}
                        // error={Boolean(errors.email && touched.email)}
                        sx={{ mb: 3 }}
                      />

                      <TextField
                        fullWidth
                        size="small"
                        name="password"
                        type="password"
                        label="Password"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        helperText={touched.password && errors.password}
                        error={Boolean(errors.password && touched.password)}
                        sx={{ mb: 1.5 }}
                      />

                      <FlexBox justifyContent="space-between">
                        <FlexBox gap={1}>
                          <Checkbox
                            size="small"
                            name="remember"
                            onChange={handleChange}
                            checked={values.remember}
                            sx={{ padding: 0 }}
                          />

                          <Paragraph>Remember Me</Paragraph>
                        </FlexBox>

                        {/* <NavLink to="/" style={{ color: '#0288d1' }}>
                          Forgot password?
                        </NavLink> */}
                      </FlexBox>

                      <LoadingButton
                        type="submit"
                        color="primary"
                        loading={loading}
                        variant="contained"
                        sx={{ my: 2 }}>
                        Login
                      </LoadingButton>

                      {/* <Paragraph>
                        Don't have an account?
                        <NavLink
                          to="/session/signup"
                          style={{
                            color: '#0288d1',
                            marginLeft: 5,
                          }}>
                          Register
                        </NavLink>
                      </Paragraph> */}
                    </form>
                  )}
                </Formik>
              </ContentBox>
            </Grid>
          </Grid>
        </Card>
      </JWTRoot>
    </BackgroundBox>
  )
}

export default ServiceLogin
