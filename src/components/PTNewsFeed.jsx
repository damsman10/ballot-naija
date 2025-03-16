import { useEffect, useState } from "react";

const PTNewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [siteLogo, setSiteLogo] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://www.premiumtimesng.com/feed"
        );
        const data = await response.json();
        setArticles(data.items.slice(0, 7));
        setSiteLogo(data.feed.image || "https://www.google.com/s2/favicons?domain=premiumtimesng.com");
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-xl lg:text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
        {siteLogo && <img src={siteLogo} alt="Premium Times Logo" className="w-8 h-8 rounded-full" />}
        Premium Times Headlines
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener"
            className={`block group ${index === 0 ? "sm:col-span-2" : ""}`}
          >
            <img
              src={article.thumbnail || "default-image.jpg"}
              alt={article.title}
              className={`w-full object-cover rounded-lg mb-2 transition-transform duration-300 group-hover:scale-105 ${
                index === 0 ? "h-72 sm:h-80" : "h-48 sm:h-56"
              }`}
            />
            <h3 className="text-[0.95rem] font-semibold text-gray-800 group-hover:text-red-600">
              {article.title}
            </h3>
            <p className="text-sm text-gray-500">
              {new Date(article.pubDate).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PTNewsFeed;
