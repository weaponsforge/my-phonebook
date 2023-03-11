import HomeComponent from '@/components/home'
import { useGlobalState } from '@/lib/hooks/useGlobalState'
import { getRandomJoke } from '@/lib/services/random'
import { useEffect, useState } from 'react'

const defaultState = {
  joke:undefined,
  activeTheme:''
}

export default function Index() {
  const [state, setState] = useState(defaultState)
  const [globalState] = useGlobalState()

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
      activeTheme:globalState.activeTheme
    }))
  },[globalState.activeTheme])

  return (
    <HomeComponent 
      state={state}
    />
  )
}
