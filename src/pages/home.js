import React from 'react'
import Header from '../components/header'
import Mainimg from '../components/main/mainimg'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function home() {
    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Header />
                <Mainimg />
            </div>
        </QueryClientProvider>
    )
}

export default home