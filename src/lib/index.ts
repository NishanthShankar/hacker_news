export const timeSince = (date: number) => {
  if (!date) return ''
  const seconds = Math.floor((new Date().getTime() - date) / 1000)
  let interval = Math.floor(seconds / 31536000)
  if (interval < 0) return ''
  if (interval > 1) return interval + 'years'

  interval = Math.floor(seconds / 2592000)
  if (interval > 1) return interval + ' months'

  interval = Math.floor(seconds / 86400)
  if (interval > 1) return interval + 'd'

  interval = Math.floor(seconds / 3600)
  if (interval >= 1) return interval + 'h'

  interval = Math.floor(seconds / 60)
  if (interval >= 1) return interval + 'm'

  return Math.floor(seconds) + 's'
}
