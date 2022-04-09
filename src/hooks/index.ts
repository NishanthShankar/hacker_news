import { useQuery } from 'react-query'

// Mock api
const APIS: { [key: string]: string } = {
  topstories:
    'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
  ask: 'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty',
  jobs: 'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty',
  show: 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty'
}

// const G_KEY = 'AIzaSyALeDOcqLyxVSRQxMRMhZMRc7WDv4cgDfk'
// const api = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&key=${G_KEY}`

export const fetchTopSearch = (id: string) => async (): Promise<any> => {
  const URL = APIS[id] || APIS.topstories
  const res = await fetch(URL)
  return await res.json()
}

export const useSearch = (id: string): any => {
  return useQuery<any, Error>(id, fetchTopSearch(id))
}
