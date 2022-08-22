import {
  Box,
  Card,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material'
import { Paragraph } from '../components/Typography'
import { connect } from 'react-redux'
import { clearAction } from '../actions/consumeAction'
import { useNavigate } from 'react-router-dom'
import { colorPalette } from '../components/themeConfig'
import { RemainTag } from '../components/RemainTag'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
  fontSize: '1.2rem',
  fontWeight: '700',
  textTransform: 'capitalize',
}))

const ProductTable = styled(Table)(() => ({
  minWidth: 400,
  whiteSpace: 'pre',
  '& small': {
    width: 50,
    height: 15,
    borderRadius: 500,
    boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
  },
  '& td': { borderBottom: 'none' },
  '& td:first-of-type': { paddingLeft: '16px !important' },
}))

const CentresTable = ({ centreInfo }) => {
  const { bgRed, bgYellow, bgGreen } = colorPalette

  const navigate = useNavigate()

  const goToForm = (id) => {
    navigate('/service/' + id)
  }

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Supply Vaccines to Centres</Title>
      </CardHeader>

      <Box overflow="auto">
        <ProductTable>
          <TableHead>
            <TableRow>
              <TableCell sx={{ px: 3 }} colSpan={4}>
                Centres
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={2}>
                Stock Status
              </TableCell>
              <TableCell sx={{ px: 0 }} colSpan={1}>
                Supply
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {centreInfo.map((centre, index) => (
              <TableRow key={index} hover>
                <TableCell
                  colSpan={4}
                  align="left"
                  sx={{ px: 0, textTransform: 'capitalize' }}>
                  <Box display="flex" alignItems="center">
                    <Paragraph sx={{ m: 0, ml: 4 }}>{centre.name}</Paragraph>
                  </Box>
                </TableCell>

                <TableCell sx={{ px: 0 }} align="left" colSpan={2}>
                  {centre.initVaccine ? (
                    centre.initVaccine < 30 ? (
                      <RemainTag bgcolor={bgYellow}>
                        {centre.initVaccine} available
                      </RemainTag>
                    ) : (
                      <RemainTag bgcolor={bgGreen}>in stock</RemainTag>
                    )
                  ) : (
                    <RemainTag bgcolor={bgRed}>out of stock</RemainTag>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton onClick={() => goToForm(centre.ID)}>
                    <LocalShippingOutlinedIcon></LocalShippingOutlinedIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ProductTable>
      </Box>
    </Card>
  )
}

// export default observer(CentresTable)
const mapStateToProps = (state) => {
  return {
    centreInfo: state.centreInfo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // get: () => dispatch(initCentreDB()),
    clearTimer: () => dispatch(clearAction()),
    // show: () => console.log(centreStore.getState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CentresTable)
