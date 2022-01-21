import {
  Container
} from 'react-bootstrap';
import { 
  Book,
  BookList
} from './components';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
  uri: "http://172.19.0.8:4001/graphql",
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className='py-3 mt-3' style={{ backgroundColor: 'lightcyan'}}>
        <Book></Book>
        <hr/>
        <BookList></BookList>
      </Container>
    </ApolloProvider>
  );
}

export default App;
