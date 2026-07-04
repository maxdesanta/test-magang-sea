import "./style.css";
import iconDate from '../../assets/calendar-event.svg';
import { Link } from "react-router-dom";
import { formatDateSlide } from "../../helper/formatDateSlide";

export default function SlideCard({data}) {
    return (
        <div className="slide-card">
            <div className="slide-text">
                <h3>Headline</h3>
                <div className="slide-group-title-news">
                    <h1>
                        {data.title}
                    </h1>
                    <p>
                        {data.description}
                    </p>
                    <div className="date-group-slide-text">
                        <img src={iconDate} alt="icon-date" />
                        <p>{formatDateSlide(data.isoDate)}</p>
                    </div>
                </div>
                <div className="link-detail-group">
                    <Link to={`/detail/${encodeURIComponent(data.link)}`} state={{ articleData: data }}>Baca Selengkapnya ↗ </Link>
                </div>
            </div>
            <div className="slide-img">
                <img src={data.image} alt="slide-news" width={600} />
            </div>
        </div>
    );
}
