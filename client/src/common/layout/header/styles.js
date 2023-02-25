const styles = {
  appbar: {
    width: '100%',
    minHeight: '66px',
    borderBottom: (theme) => `6px solid ${theme.palette.primary.dark}`
  },
  container: (theme) => ({
    display: 'flex',
    '& button': {
      '& a, span': {
        color: theme.palette.primary.light,
        textDecoration: 'none'
      },
      '& a:visited': {
        color: theme.palette.primary.light
      },
      '& a:hover': {
        color: '#fff'
      },
      '& span:hover': {
        color: '#fff'
      }
    }
  }),
  toolbar: {
    width: '100%',
    display: 'flex',
    alignItems: 'end',
    color: (theme) => theme.palette.primary.light
  }
}

export default styles
