import PropTypes from 'prop-types'

import Typography from '@mui/material/Typography'
import Page from '@/common/layout/page'

function LoginComponent ({ simcards, stringNames }) {
  return (
    <Page>
      <Typography variant="h2" component="h2">
        Login
      </Typography>

      {simcards.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}

      <p>{stringNames}</p>
    </Page>
  )
}

LoginComponent.propTypes = {
  simcards: PropTypes.array,
  stringNames: PropTypes.string
}

export default LoginComponent
