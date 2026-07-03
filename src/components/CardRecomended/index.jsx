import './style.css'
import DateWritter from '../DateWritter'

export default function CardRecomended() {
    return (
        <div className='card-recomended'>
            <div className="image-card">
                <img src="https://images.unsplash.com/photo-1602674809970-89073c530b0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
            <div className='text-card'>
                <h4>Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing Session di RSUD Dr. Soetomo</h4>
                <DateWritter />
            </div>
        </div>
    )
}
