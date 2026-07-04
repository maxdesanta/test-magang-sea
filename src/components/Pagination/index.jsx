import './style.css'

export default function Pagination({ currentPage, totalPages, totalResults, indexOfFirstItem, indexOfLastItem, onPageChange }) {
    if (!totalResults) return null;

    const getPageNumbers = () => {
        const pages = [];
        
        // Atur berapa banyak angka yang mau ditampilkan di sekitar halaman aktif
        const siblingCount = 1;

        // Selalu tampilkan halaman pertama
        pages.push(1);

        // Hitung range angka di tengah
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

        // Jika ada jarak antara halaman 1 dan angka tengah awal, beri titik-titik
        if (leftSiblingIndex > 2) {
            pages.push('...');
        }

        // Masukkan angka-angka tengah yang dinamis
        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
            pages.push(i);
        }

        // Jika ada jarak antara angka tengah akhir dan halaman terakhir, beri titik-titik
        if (rightSiblingIndex < totalPages - 1) {
            pages.push('...');
        }

        // Selalu tampilkan halaman terakhir (jika total halaman lebih dari 1)
        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination-container">
            {/* Bagian Kiri: Info Teks */}
            <div className="pagination-info">
                Showing {totalResults === 0 ? 0 : indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalResults)} of {totalResults} results
            </div>

            {/* Bagian Kanan: Tombol Navigasi */}
            <div className="pagination-nav">
                <button className="nav-arrow" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
                    &larr; Previous
                </button>

                {pageNumbers.map((number, index) => {
                    if (number === '...') {
                        return (
                            <span key={`dots-${index}`} className="page-dots">
                                ...
                            </span>
                        );
                    }

                    return (
                        <button 
                            key={`page-${number}`}
                            className={`page-number ${currentPage === number ? 'active' : ''}`}
                            onClick={() => onPageChange(number)}
                        >
                            {number}
                        </button>
                    );
                })}

                <button className="nav-arrow" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
                    Next &rarr;
                </button>
            </div>
        </div>
    )
}