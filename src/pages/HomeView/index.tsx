import { useState } from 'react'
import TabBar from 'components/TabBar'
import ResultsView from './ResultsView'

export default function HomeView (): JSX.Element {
  const [tab, setTab] = useState('Programming')

  return (
    <>
      <TabBar />
      <ResultsView />
    </>
  )
}
