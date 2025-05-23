import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(

    <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </QueryClientProvider>
  
)
