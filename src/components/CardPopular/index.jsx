import DateWritter from "../DateWritter";
import NewsCardLink from "../NewsCardLink";
import "./style.css";

export default function CardPopular({
  image,
  title,
  number,
  id,
  date,
  fullData,
  category = "Politik",
}) {
  return (
    <NewsCardLink
      to={`/detail/${id}`}
      state={{ articleData: fullData }}
      className="news-card-link"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="news-card">
        <div className="image-container">
          <div className="badge-number">
            <p>{number}</p>
          </div>
          <img src={image} alt="Berita" className="news-image" />
        </div>

        <div className="content-container">
          <h4 className="news-title">{title}</h4>
          <DateWritter date={date} category={category} />
        </div>
      </div>
    </NewsCardLink>
  );
}
