import { GraphiQL } from 'graphiql';
import { explorerPlugin } from '@graphiql/plugin-explorer'
import 'graphiql/style.css';
import '@graphiql/plugin-explorer/style.css'

async function fetcher(graphQLParams) {
  const response = await fetch('https://graphql.earthdata.nasa.gov/api', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(graphQLParams),
  });
  return response.json();
}

function App() {
  return <GraphiQL fetcher={fetcher} plugins={[explorerPlugin()]} />;
}

export default App;