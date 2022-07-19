import {
  Box,
  Card,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  useTheme,
} from '@mui/material'
import { Paragraph } from '../components/Typography'
import { observer } from 'mobx-react-lite'
import { centreStore } from '../store/CentreStore'

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}))

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
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

const Small = styled('small')(({ bgcolor }) => ({
  width: 50,
  height: 15,
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  overflow: 'hidden',
  background: bgcolor,
  boxShadow: '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
}))

const centreList = centreStore.centreList

const CentresTable = ({ selectStore }) => {
  const { palette } = useTheme()
  const bgError = palette.error.main
  const bgPrimary = palette.primary.main
  const bgSecondary = palette.secondary.main

  function supplyForm(centreName) {
    selectStore.setChoice(centreName)
  }

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>top selling products</Title>
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
            {centreList.map((centre, index) => (
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
                  {centre.amount ? (
                    centre.amount < 30 ? (
                      <Small bgcolor={bgSecondary}>
                        {centre.amount} available
                      </Small>
                    ) : (
                      <Small bgcolor={bgPrimary}>in stock</Small>
                    )
                  ) : (
                    <Small bgcolor={bgError}>out of stock</Small>
                  )}
                </TableCell>

                <TableCell sx={{ px: 0 }} colSpan={1}>
                  <IconButton onClick={() => supplyForm(centre.name)}>
                    <Icon color="primary">edit</Icon>
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

export default observer(CentresTable)
