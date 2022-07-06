import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Box } from 'rebass'

import UserInput from './components/UserInput'

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          maxWidth: "1180px",
          height: "609px",
          margin: "auto",
          padding: "15px"
        }}>
        <UserInput />
      </Box>
    </QueryClientProvider>
  )
}

export default App