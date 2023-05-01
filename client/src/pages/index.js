import HomeComponent from '@/components/home'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'
import { getRandomJoke } from '@/lib/services/random'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSyncV } from 'use-sync-v'

const defaultState = {
  joke:undefined,
  activeTheme:''
}

function Index() {
  const [state, setState] = useState(defaultState)
  const activeTheme = useSyncLocalStorage('activeTheme')
  const auth = useSyncV('auth')
  const router = useRouter()

  useEffect(()=>{
    if (auth.authUser) {
      router.push('/contacts')
    } else {
      router.push('/login')
    }
  })
  useEffect(()=>{
    (async()=>{
      const randomJoke = await getRandomJoke()
      setState(prev=>({
        ...prev,
        joke:randomJoke,
      }))
    })()
  },[])

  useEffect(()=>{
    setState(prev=>({
      ...prev,
      activeTheme:activeTheme
    }))
  },[activeTheme])

  return (
    <HomeComponent
      state={state}
    />
  )
}

export default Index