import Button from '@mui/material/Button'
import Page from '@/common/layout/page'

function DashboardComponent ({ logout }) {
  return (
    <Page>
      <h1>Dashboard</h1>
      <Button variant='contained' onClick={(logout)}>
        Sign Out
      </Button>
    </Page>
  )
}

export default DashboardComponent
