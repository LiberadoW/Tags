import './App.css'
import { useQuery } from '@tanstack/react-query'
import DataTable from './components/test/dataTable';
import RowInput from './components/RowInput/rowInput';
import { CircularProgress, Box } from '@mui/material';
import { QueryData } from './types'
import { useState } from 'react';

function App() {

  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });

  const { data: tagsData, isLoading, error }: QueryData = useQuery({
    queryFn: () => {
      return fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow').then(res => res.json())
    },
    queryKey: ['tags'],
  })


  if (isLoading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  }

  if (error || !tagsData?.has_more) {
    return <div>Error: Failed to fetch data. Try again later.</div>
  }

  if (tagsData.items && tagsData.items.length === 0) {
    return <div>Nothing to display.</div>
  }

  const rows = tagsData.items ? tagsData.items.map((tag, index) => {
    return {
      name: tag.name,
      count: tag.count,
      id: index
    }
  }) : [];

  const numberOfTags = rows ? rows.length : 0;

  return (

    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: '600px' }}>
      <h1>StackOverflow tag viewer</h1>
      <RowInput numberOfTags={numberOfTags} paginationModel={paginationModel} setPaginationModel={setPaginationModel} />
      <DataTable rows={rows} paginationModel={paginationModel} setPaginationModel={setPaginationModel} />
    </Box>

  )
}

export default App
