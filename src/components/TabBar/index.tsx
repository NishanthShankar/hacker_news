import { useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import { View, RView } from 'components/View'
import styles from './index.module.css'
import cn from 'classnames'

export interface ISearchBarProps {
  onSearch?: (a: string) => void
  query?: string
}

export interface IElement {
  target: {
    value: string
  }
}

const TABS = [
  { label: 'NEW', route: '/' },
  { label: 'ASK', route: '/ask' },
  { label: 'JOBS', route: '/jobs' },
  { label: 'SHOW', route: '/show' }
]

export default function TabBar (props: ISearchBarProps): JSX.Element | null {
  const match = useMatch('/:id')
  const navigate = useNavigate()
  const id = match?.params?.id || 'new'

  return (
    <RView className={styles.container}>
      {TABS.map(tab => (
        <View
          onClick={() => navigate(tab.route)}
          key={tab.label}
          className={cn(styles.button, {
            [styles.selected]:
              id.toLowerCase() === tab.label.toLocaleLowerCase()
          })}
        >
          {tab.label}
        </View>
      ))}
    </RView>
  )
}
