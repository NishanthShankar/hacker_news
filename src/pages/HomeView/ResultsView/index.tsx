import { useState, useRef } from 'react'
import { useMatch } from 'react-router-dom'
import { View } from 'components/View'
import PostItem from 'components/PostItem'
import Spinner from 'components/Spinner'
import AutoFetcher from 'components/AutoFetcher'
import { useSearch } from 'hooks/'

const OFFSET = 20

export default function ResultsView (): JSX.Element {
  const [offset, setOffset] = useState(OFFSET)
  const offsetRef = useRef(OFFSET)

  const match = useMatch('/:id')
  const id = match?.params?.id || 'topstories'

  const result = useSearch(id)
  const { isLoading, data = [] } = result

  const onVisible = () => {
    offsetRef.current = offsetRef.current + OFFSET
    setOffset(offsetRef.current)
  }

  if (isLoading) return <Spinner />
  // Render data
  return (
    <View>
      {data.slice(0, offset).map((r: string, index: number) => (
        <PostItem key={r} id={r} index={index} />
      ))}
      <AutoFetcher onVisible={onVisible} hide={offset >= data.length} />
    </View>
  )
}
