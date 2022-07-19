import { DatePicker } from '@mui/x-date-pickers'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { Button, Grid, styled } from '@mui/material'
import { H3, H4, Span } from '../components/Typography'
import { useEffect, useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { formStore } from '../store/FormStore'

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}))

const DeliveryForm = ({ centreName, formStore, selectStore }) => {
  const [state, setState] = useState({ date: new Date() })

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== state.password) return false

      return true
    })
    return () => ValidatorForm.removeValidationRule('isPasswordMatch')
  }, [state.password])

  const handleSubmit = (event) => {
    console.log('Form submitted', event.target)
    formStore.setForm(centreName, state)
    formStore.sendEmail(event)
    selectStore.closeChoice()
  }

  const handleChange = (event) => {
    event.persist()
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const handleDateChange = (date) => setState({ ...state, date })

  const { amount, driver, date, code } = state

  return (
    <div>
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
          <Span sx={{ pl: 1, textTransform: 'capitalize' }}>Submit</Span>
        </Button>
      </ValidatorForm>
    </div>
  )
}

export default DeliveryForm
