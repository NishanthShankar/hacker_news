import { useRef, useLayoutEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { View } from 'components/View'
import classes from './index.module.css'
import { IPostItemProps } from 'types'
import { timeSince } from 'lib'

export const fetchDetails = (id: string) => async (): Promise<any> => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  )
  return await res.json()
}

export default function PostItem (props: IPostItemProps): JSX.Element {
  const result = useQuery(['item', props.id], fetchDetails(props.id))
  const { data } = result

  if (result.isLoading)
    return (
      <View className={classes.container}>
        <View className={classes.mainBar} />
        <View className={classes.subBar} />
      </View>
    )
  return (
    <View className={classes.container}>
      <span>
        {(props?.index || 0) + 1}. {data?.title}
      </span>
      <span className={classes.subText}>
        {data?.score} by {data?.by} {timeSince(data?.time * 1000)} ago |{' '}
        {data?.descendants} comments
      </span>
    </View>
  )
}
