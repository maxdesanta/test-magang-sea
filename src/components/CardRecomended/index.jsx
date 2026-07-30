import "./style.css";
import DateWritter from "../DateWritter";
import NewsCardLink from "../NewsCardLink";
import { getValidImage } from "../../helper/getValidImage";

export default function CardRecomended({
  title,
  image,
  date,
  category = "Politik",
  fullData,
  id,
}) {
  return (
    <div className="card-recomended">
      <NewsCardLink
        to={`/detail/${id}`}
        state={{ articleData: fullData }}
        className="news-card-link"
      >
        <div className="image-card">
          <img src={getValidImage(image)} alt={title} />
        </div>
        <div className="text-card">
          <h4>{title}</h4>
          <DateWritter date={date} category={category} />
        </div>
      </NewsCardLink>
    </div>
  );
}
