export type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
};

// NewsAPI.org
export async function fetchNewsAPI(): Promise<Article[]> {
  const url = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.NEWSAPI_KEY}`;
  console.log("Fetching NewsAPI:", url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text();
    console.error("NewsAPI fetch failed:", res.status, text);
    return [];
  }
  const data = await res.json();
  console.log("NewsAPI data:", data);
  return data.articles.map((a: any) => ({
    title: a.title,
    description: a.description ?? "",
    url: a.url,
    urlToImage: a.urlToImage,
  }));
}

export async function fetchGNews(): Promise<Article[]> {
  const url = `https://gnews.io/api/v4/top-headlines?token=${process.env.GNEWS_API_KEY}&lang=id&max=10`;
  console.log("Fetching GNews:", url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text();
    console.error("GNews fetch failed:", res.status, text);
    return [];
  }
  const data = await res.json();
  console.log("GNews data:", data);
  return data.articles.map((item: any) => ({
    title: item.title,
    description: item.description ?? "",
    url: item.url,
    urlToImage: item.image ?? null,
  }));
}

export async function fetchMediastack(): Promise<Article[]> {
  const url = `http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&countries=id&limit=10`;
  console.log("Fetching Mediastack:", url);
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    const text = await res.text();
    console.error("Mediastack fetch failed:", res.status, text);
    return [];
  }
  const data = await res.json();
  console.log("Mediastack data:", data);
  return data.data.map((item: any) => ({
    title: item.title,
    description: item.description ?? "",
    url: item.url,
    urlToImage: item.image ?? null,
  }));
}

