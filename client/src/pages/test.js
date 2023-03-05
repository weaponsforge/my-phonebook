import { useState, useEffect } from 'react'
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@/lib/utils/firebase/config'

import Page from '@/common/layout/page'

function Test () {
  const [token, setToken] = useState('')
  const data = { to: 'kobalos01@gmail.com', from: 'my.phonebook.pro@gmail.com', subject: 'hey', text: 'hohohoho' }

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth,
        data.to,
        '123456789'
      )

      console.log(response.user.accessToken)
      setToken(response.user.accessToken)

      console.log('---sending email')
      // await createUserWithEmailAndPassword(auth)
    } catch (err) {
      console.log(err.message)
    }
  }

  const sendEmail = async () => {
    try {
      const url = 'https://my-phonebook-test.vercel.app/api/email'
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })

      console.log(response.json())
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Page>
      <div style={{ width: '800px' }}>
        <button onClick={signIn}>Get Token</button>
        <p>{token}</p>
        <br />
        <button onClick={sendEmail}>Send Email</button>
      </div>
    </Page>
  )
}

export default Test
