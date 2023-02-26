import { useEffect, useState } from 'react'
import LoginComponent from '@/components/login'
import { getSimCards } from '@/services/simcards'
import { _SimCard } from '@/services/simcards/simcards'
import { useCollection } from '@/lib/hooks/useFirestore'

function Login () {
  const [stringNames, setStringNames] = useState('')
  const { documents: simcards } = useCollection(_SimCard.SIMCARDS, 'id')

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getSimCards()

        /* eslint-disable no-unused-vars */
        setStringNames(prev => response.map(item => item.name).toString())
      } catch (err) {
        // console.log(err.message)
      }
    }

    load()
  }, [])

  return (
    <LoginComponent
      simcards={simcards}
      stringNames={stringNames}
    />
  )
}

export default Login
