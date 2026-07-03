import './style.css'

export default function Pagination() {
    return (
        <div className="pagination-container">
            {/* Bagian Kiri: Info Teks */}
            <div className="pagination-info">
                Showing 1 to 10 of 97 results
            </div>

            {/* Bagian Kanan: Tombol Navigasi */}
            <div className="pagination-nav">
                <button className="nav-arrow" disabled>
                &larr; Previous
                </button>
                
                <button className="page-number active">1</button>
                <button className="page-number">2</button>
                <span className="page-dots">...</span>
                <button className="page-number">8</button>
                <button className="page-number">9</button>
                
                <button className="nav-arrow">
                Next &rarr;
                </button>
            </div>
        </div>
    )
}
