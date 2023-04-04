import HomeComponent from '@/components/home'
import { useSyncLocalStorage } from '@/lib/hooks/useSync'
import { getRandomJoke } from '@/lib/services/random'
import { useEffect, useState } from 'react'

const defaultState = {
  joke:undefined,
  activeTheme:''
}

function Index() {
  const [state, setState] = useState(defaultState)
  const activeTheme = useSyncLocalStorage('activeTheme')

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