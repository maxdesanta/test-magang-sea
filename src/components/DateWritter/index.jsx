import { formatDate } from '../../helper/formatDate'
import './style.css'

export default function DateWritter({date, category = "Politik"}) {
    return (
        <div class="news-meta">
            <span class="category">{category}</span>
            <span class="dot"></span>
            <span class="date">{formatDate(date)}</span>
        </div>
    )
}
