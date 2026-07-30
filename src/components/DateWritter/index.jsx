import { formatDate } from '../../helper/formatDate'
import './style.css'

export default function DateWritter({date, category = "Politik"}) {
    return (
        <div className="news-meta">
            <span className="category">{category}</span>
            <span className="dot"></span>
            <span className="date">{formatDate(date)}</span>
        </div>
    )
}
