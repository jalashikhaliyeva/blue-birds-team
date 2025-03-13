// pages/api/collections.js
export default async function handler(req, res) {
  const apiUrl = "https://api.opensea.io/api/v1/collections?offset=0&limit=20";

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Accept: "application/json",
        "X-API-KEY": process.env.OPENSEA_API_KEY, // use your environment variable here
      },
    });

    if (!response.ok) {
      throw new Error(`OpenSea API responded with status ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
