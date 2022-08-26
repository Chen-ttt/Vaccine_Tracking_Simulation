import { DatePicker } from '@mui/x-date-pickers'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Button, Grid, styled, Card } from '@mui/material'
import { H3, H4, Span } from '../components/Typography'
import { useEffect, useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { useParams } from 'react-router-dom'
import { deliveryAction } from '../actions/consumeAction'
import { connect } from 'react-redux'
import emailjs from 'emailjs-com'
// import { centreStore } from '../store/centreStore'

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}))

const DeliveryForm = ({ centreInfo, delivery }) => {
  const params = useParams()
  const [state, setState] = useState({ date: new Date() })

  // centreInfo = centreStore.getState().centreInfo
  const centreName = centreInfo[params.id].name
  console.log('form receive', params.id, centreName)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form submitted', event.target)

    // emailjs
    //   .sendForm('gmail', 'template_utnmhlb', event.target, 'Ah0EiXaVqDkRWJm24')
    //   .then(
    //     (result) => {
    //       console.log('Delivery Remind email send!')
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
    console.log('skip email')
    // delivery(Number(amount), Number(params.id))

    // let div = document.getElementById('addBlank')
    // div.append('Manufacturer delivery', amount, 'vaccines...')
  }

  const handleChange = (event) => {
    event.persist()
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleDateChange = (date) => setState({ ...state, date })

  const { amount, driver, date, code } = state

  return (
    <Card sx={{ px: 3, py: 2, mb: 1 }}>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
        <H3>Delivery Form</H3>
        <Grid container spacing={6}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <H4> Send to {centreName}</H4>
            <br></br>
            <TextField
              type="text"
              name="code"
              label="Code"
              onChange={handleChange}
              value={code || ''}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <TextField
              type="text"
              name="driver"
              label="Driver's name"
              value={driver || ''}
              onChange={handleChange}
              validators={['required']}
              errorMessages={['this field is required']}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                value={date}
                onChange={handleDateChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    label="Date picker"
                    id="mui-pickers-date"
                    sx={{ mb: 2, width: '100%' }}
                  />
                )}
              />
            </LocalizationProvider>

            <TextField
              sx={{ mb: 4 }}
              type="number"
              name="amount"
              label="Amount"
              onChange={handleChange}
              value={amount || ''}
              errorMessages={['this field is required']}
              validators={['required']}
            />
          </Grid>
        </Grid>

        <Button color="primary" variant="contained" type="submit">
          {/* <Icon>send</Icon> */}
          <Span sx={{ pl: 0, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    centreInfo: state.centreInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    delivery: (amount, id) => dispatch(deliveryAction(amount, id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryForm)
