import { getCollection, getCollections } from '@/lib/openseaApi';
import React from 'react'

export async function getServerSideProps() {
  try {
    const data = await getCollections();
    const singleCollection = await getCollection(`keke-genesis-exit-vectors`)
  

    return { props: { data , singleCollection } };
  } catch (error) {
    return {
      props: {
       
        data: null,
        singleCollection:  null,
      
      },
    };
  }
}


function Test({data , singleCollection}) {
  console.log(data, "data");
  console.log(singleCollection, "singleCollection");
  
  return (
    <div>Test</div>
  )
}

export default Test