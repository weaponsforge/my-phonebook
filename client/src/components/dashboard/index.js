import Page from '@/common/layout/page'

function DashboardComponent ({ logout }) {
  return (
    <Page>
      <h1>Dashboard</h1>
      <button onClick={(logout)}>
        Sign Out
      </button>
    </Page>
  )
}

export default DashboardComponent
