import './App.css'
import { useQuery } from '@tanstack/react-query'
import DataTable from './components/dataTable/dataTable'
import { QueryData } from './types'

function App() {

  const { data: tagsData, isLoading, error }: QueryData = useQuery({
    queryFn: () => {
      return fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow').then(res => res.json())
    },
    queryKey: ['tags'],
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error || !tagsData?.has_more) {
    return <div>Error</div>
  }

  return (
    <>
      <div><DataTable tagsData={tagsData} /></div>
    </>
  )
}

export default App
