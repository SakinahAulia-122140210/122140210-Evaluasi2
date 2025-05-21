import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NewsList from "./components/News";
import LogoutButton from "./components/logout";
import { fetchNewsAPI, fetchGNews, fetchMediastack, Article } from "../lib/newsFetchers";

import "./styles/main.css";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <html>
        <head>
          <meta httpEquiv="refresh" content="0; url=/login" />
        </head>
        <body />
      </html>
    );
  }

  const [newsAPIArticles, gnewsArticles, mediastackArticles] = await Promise.all([
    fetchNewsAPI(),
    fetchGNews(),
    fetchMediastack(),
  ]);

  const allArticles: Article[] = [...newsAPIArticles, ...gnewsArticles, ...mediastackArticles];

  return (
    <main>
      <header>
        <h1>Berita Utama Hari ini</h1>
        <LogoutButton />
      </header>
      <NewsList articles={allArticles} />
    </main>
  );
}
