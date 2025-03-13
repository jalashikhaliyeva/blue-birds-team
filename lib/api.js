// lib/api.js
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("Base URL:", process.env.NEXT_PUBLIC_API_BASE_URL);

async function fetchFromEndpoint(endpoint) {
  const url = `${baseUrl}/${endpoint}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error fetching ${url}: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postSubscription(email) {
  const url = `${baseUrl}/subscription`;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (!res.ok) {
      throw new Error(`Error posting to ${url}: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getHero() {
  return await fetchFromEndpoint("hero");
}

export async function getSettings() {
  return await fetchFromEndpoint("settings");
}

export async function getAbout() {
  return await fetchFromEndpoint("about");
}
export async function getCategory() {
  return await fetchFromEndpoint("opensea-category");
}
export async function getSocialLinks() {
  return await fetchFromEndpoint("social-link");
}
export async function getTeams() {
  return await fetchFromEndpoint("teams");
}
export async function getSlider() {
  return await fetchFromEndpoint("slider");
}
