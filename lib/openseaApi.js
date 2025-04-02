// pages/api/openseaApi.js

const OPENSEA_API_BASE_URL = "https://api.opensea.io/api/v2";
const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY;
// console.log(OPENSEA_API_KEY, "OPENSEA_API_KEY");

async function fetchFromOpensea(endpoint) {
  const url = `${OPENSEA_API_BASE_URL}/${endpoint}`;
  try {
    const res = await fetch(url, {
      headers: {
        "x-api-key": OPENSEA_API_KEY,
      },
    });
    if (!res.ok) {
      throw new Error(`Error fetching ${url}: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//  all collections
export async function getCollections() {
  return await fetchFromOpensea("collections");
}

//  single collection
export async function getCollection(collection_slug) {
  return await fetchFromOpensea(`collections/${collection_slug}`);
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { collection_slug } = req.query;
      if (collection_slug) {
        const collection = await getCollection(collection_slug);
        res.status(200).json(collection);
      } else {
        const collections = await getCollections();
        res.status(200).json(collections);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
