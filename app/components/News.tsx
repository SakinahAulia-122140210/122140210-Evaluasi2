type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
};

export default function NewsList({ articles }: { articles: Article[] }) {
  if (!articles || articles.length === 0) {
    return <p style={{ color: "#fff", textAlign: "center" }}>Tidak ada berita.</p>;
  }

  return (
    <div className="news-list" role="list" aria-label="Daftar berita terbaru">
      {articles.map((article, index) => (
        <a
          key={index}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="article-card"
          role="listitem"
        >
          {article.urlToImage ? (
            <img
              src={article.urlToImage}
              alt={`Gambar berita: ${article.title}`}
              className="article-image"
              loading="lazy"
              width={180}
              height={140}
            />
          ) : (
            <div
              style={{
                width: 180,
                height: 140,
                backgroundColor: "#333",
                borderTopLeftRadius: 24,
                borderBottomLeftRadius: 24,
              }}
            />
          )}
          <div className="article-content">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-description">{article.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
