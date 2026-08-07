import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import TitlePages from "../../components/TitlePages";
import Pagination from "../../components/Pagination";
import SearchIcon from "../../assets/search-icon.svg";
import CardRecomended from "../../components/CardRecomended";
import { fetchNewsPageData } from "../../redux/newsSlice";

export default function News({ endpoint, title }) {
  const dispatch = useDispatch();
  const { newsData, status, error } = useSelector((state) => state.news);
  const isLoading = status === "loading";
  const isError = status === "failed";
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 8;

  useEffect(() => {
    dispatch(fetchNewsPageData({ endpoint }));
  }, [dispatch, endpoint]);

  const filteredNews = newsData.filter((item) => {
    return item.title?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Logika Pagination Terbataasi 8 Data
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentTodayNews = filteredNews.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );
  const totalPages = Math.ceil(filteredNews.length / itemPerPage);

  return (
    <main>
      {isError && (
        <div className="news-status news-status-error" role="alert">
          <p>{error || "Gagal memuat berita."}</p>
          <button
            type="button"
            onClick={() => dispatch(fetchNewsPageData({ endpoint }))}
          >
            Coba Lagi
          </button>
        </div>
      )}
      {isLoading && (
        <div className="news-status" aria-live="polite">
          <span className="news-spinner" aria-hidden="true"></span>
          <p>Memuat berita...</p>
        </div>
      )}
      <div className="recomended-news-group">
        <div className="group-filter">
          <TitlePages title={title} />

          <div className="search">
            <input
              type="text"
              placeholder="Cari Berita..."
              aria-label="Cari berita"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img src={SearchIcon} alt="search-icon" />
          </div>
        </div>

        <div className="container-recomended-news">
          {currentTodayNews.length === 0 ? (
            <div
              style={{
                gridColumn: "1/-1",
                textAlign: "center",
                padding: "40px",
                color: "var(--color-text-muted)",
              }}
            >
              Berita yang kamu cari tidak ditemukan...
            </div>
          ) : (
            currentTodayNews.map((item, index) => {
              const newsImage =
                typeof item.image === "object"
                  ? item.image?.large || item.image?.medium || item.image?.small
                  : item.image || "https://placehold.co/600x400?text=No+Image";
              let newsCategory = "News";

              if (endpoint === "hiburan") {
                newsCategory = "Hiburan";
              } else if (endpoint === "gaya-hidup") {
                newsCategory = "Gaya Hidup";
              } else if (endpoint === "olahraga") {
                newsCategory = "Olahraga";
              } else if (endpoint === "nasional") {
                newsCategory = "Nasional";
              } else if (endpoint === "internasional") {
                newsCategory = "Internasional";
              } else if (endpoint === "politik") {
                newsCategory = "Politik";
              } else if (endpoint === "teknologi") {
                newsCategory = "Teknologi";
              } else if (endpoint === "ekonomi") {
                newsCategory = "Ekonomi";
              } else if (item.categories && item.categories.length > 0) {
                newsCategory = item.categories[0];
              }

              const updatedItems = {
                ...item,
                categories: newsCategory,
                sourcePage: title,
              };

              return (
                <CardRecomended
                  key={index}
                  id={encodeURIComponent(item.link)}
                  title={item.title}
                  image={newsImage}
                  date={item.isoDate}
                  category={newsCategory}
                  fullData={updatedItems}
                />
              );
            })
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalResults={filteredNews.length}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </main>
  );
}
