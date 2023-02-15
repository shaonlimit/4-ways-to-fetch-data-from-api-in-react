import { QueryClient, QueryClientProvider } from 'react-query';
import UsingAxios from './components/UsingAxios';
import UsingFetch from './components/UsingFetch';
import UsingReactQuery from './components/UsingReactQuery';
import UsingSWR from './components/UsingSWR';

function App() {
  const client = new QueryClient();
  return (
    <>
      <main className='fetch-data'>
        <UsingFetch />
        <UsingAxios />
        <UsingSWR />
        <QueryClientProvider client={client}>
          <UsingReactQuery />
          <UsingReactQuery />
        </QueryClientProvider>
      </main>
    </>
  );
}

export default App;
