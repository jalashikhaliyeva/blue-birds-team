import { useEffect } from 'react';

export async function getServerSideProps() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-api-key': process.env.OPENSEA_API_KEY,
    },
  };

  const res = await fetch('https://api.opensea.io/api/v2/collections/bluebirdsteam', options);
  if (!res.ok) {
    return { props: { error: 'Failed to fetch data' } };
  }
  const data = await res.json();

  return {
    props: { data },
  };
}

export default function Test({ data, error }) {
  useEffect(() => {
    console.log('OpenSea data (client):', data);
  }, [data]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <h1>OpenSea API Collection Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
