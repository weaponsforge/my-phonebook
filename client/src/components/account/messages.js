const messages = [
  {
    mode: 'verifyEmail',
    message: 'Please wait while we verify your email.',
    success: `Success! Email verified. You can now <a href="${process.env.NEXT_PUBLIC_BASE_PATH}/login">sign in</a> with your new account.`,
    error: `Try verifying your email again.<br>Your request to verify your email has expired or the link has already been used.<br><br>Resend email verification? <a href="${process.env.NEXT_PUBLIC_BASE_PATH}/account?mode=resend_email_verification">Resend</a>`
  },
  {
    mode: 'resetPassword',
    message: 'Reset your password.',
    success: `Success! Password changed. You can now <a href="${process.env.NEXT_PUBLIC_BASE_PATH}/login">sign in</a> using your new password.`,
    error: `Try <a href="${process.env.NEXT_PUBLIC_BASE_PATH}/recoverPassword">resetting</a> your password again.<br>Your request to change your password has expired or the link has already been used.`
  },
  {
    mode: 'resend_email_verification',
    message: 'Enter your registration email',
    success: 'Success! Email verification sent.'
  },
  {
    mode: 'recoverEmail',
    message: '',
    success: ''
  }
]

export default messages
