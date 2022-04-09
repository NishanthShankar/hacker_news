import React, { useLayoutEffect, useRef } from 'react'
import Spinner from 'components/Spinner'
import styles from './index.module.css'

export interface IAutoFetcherProps {
  hide?: boolean
  onVisible?: () => void
}

export default function AutoFetcher (
  props: IAutoFetcherProps
): JSX.Element | null {
  const ref = useRef(null)
  const observerCb = (entities: Array<{ isIntersecting: boolean }>): void => {
    if (entities?.[0]?.isIntersecting) props?.onVisible?.()
  }

  useLayoutEffect((): void => {
    if (ref.current == null) return
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    }

    const observer = new IntersectionObserver(observerCb, options)
    observer.observe(ref.current)
  }, [ref.current])

  if (props.hide === true) return null
  return (
    <div ref={ref} className={styles.container}>
      <Spinner />
    </div>
  )
}
