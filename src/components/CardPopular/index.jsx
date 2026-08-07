import DateWritter from "../DateWritter";
import NewsCardLink from "../NewsCardLink";
import { getValidImage } from "../../helper/getValidImage";
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
          <img src={getValidImage(image)} alt={title || "Berita"} className="news-image" />
        </div>

        <div className="content-container">
          <h4 className="news-title">{title}</h4>
          <DateWritter date={date} category={category} />
        </div>
      </div>
    </NewsCardLink>
  );
}
