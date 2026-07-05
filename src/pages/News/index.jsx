import { useEffect, useState } from 'react'
import './style.css'
import { newsApi } from '../../api/newsApi';
import TitlePages from '../../components/TitlePages';
import Pagination from '../../components/Pagination';
import SearchIcon from '../../assets/search-icon.svg';
import CardRecomended from '../../components/CardRecomended';
import { cnnApi } from '../../api/cnnApi';
import { topNewsApi } from '../../api/topNewsApi';

export default function News({ endpoint, title }) {
    const [newsData, setNewsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 8;

    const getDataNews = async() => {
        try {
            if(endpoint === "kumparan-news") {
                const response = await newsApi();
                setNewsData(response);
            } else if (endpoint === "otomotif" || endpoint === "politik" || endpoint === "Tekno" || endpoint === "ekonomi") { 
                const response = await topNewsApi(endpoint);
                setNewsData(response);
            } else {
                const response = await cnnApi(endpoint);
                setNewsData(response);
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getDataNews();
    }, [newsData]);

    const filteredNews = newsData.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); 
    };

    // Logika Pagination Terbataasi 8 Data
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentTodayNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredNews.length / itemPerPage);

    return (
        <main>
            <div className='recomended-news-group'>
                <div className='group-filter'>
                    <TitlePages title={title} />

                    <div className='search'>
                        <input 
                            type="text" 
                            placeholder='Cari Berita...' 
                            value={searchQuery} 
                            onChange={handleSearchChange} 
                        />
                        <img src={SearchIcon} alt="search-icon" />
                    </div>
                </div>
                
                <div className="container-recomended-news">
                    {currentTodayNews.length === 0 ? (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#888' }}>
                            Berita yang kamu cari tidak ditemukan...
                        </div>
                    ) : (
                            currentTodayNews.map((item, index) => {
                                const newsImage = typeof item.image === 'object' ? (item.image?.large || item.image?.medium || item.image?.small)
                                    : (item.image || "https://placehold.co/600x400?text=No+Image");
                                
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
                                    sourcePage: title
                                }
                
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
                                )
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
    )
}
