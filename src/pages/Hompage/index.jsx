import { useEffect, useState } from 'react';
import './style.css'
import SearchIcon from '../../assets/search-icon.svg';
import SlideCard from '../../components/SlideCard';
import SlideButtom from '../../components/SlideButton';
import TitlePages from '../../components/TitlePages';
import CardPopular from '../../components/CardPopular';
import CardRecomended from '../../components/CardRecomended';
import Pagination from '../../components/Pagination';
import CardSlider from '../../components/CardSlider';
import { topNewsApi } from '../../api/topNewsApi';
import { todayNewsApi } from '../../api/todayNewsApi';
import { slideApi } from '../../api/slideApi';

export default function Homepage() {
    const [topNews, setTopNews] = useState();
    const [todayNews, setTodayNews] = useState([]);
    const [isNews, setIsNews] = useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [currentBotomSlide, setCurrentBotomSlide] = useState(0);
    const itemPerPage = 8;
    const [currentSlide, setCurrentSlide] = useState(0);
    const maxSlide = 5;

    const bottomSliderData = [
        {
            title: "Petualangan Edukatif bersama Malang Mbois City Tour!",
            description: "Jelajahi keindahan budaya dan sejarah kota Malang dengan panduan seru dan edukatif.",
            backgroundColor: "rgba(0, 202, 163, 1)" 
        },
        {
            title: "Yuk Tulis Beritamu Sendiri di Portal Komunitas Mbois!",
            description: "Punya info menarik di sekitarmu? Suarakan opinimu dan bagikan cerita inspiratifmu sekarang.",
            backgroundColor: "rgba(76, 175, 80, 1)" 
        },
        {
            title: "Grup Diskusi Kreatif Pemuda Malang Raya Resmi Dibuka",
            description: "Gabung bersama ribuan kreator lokal untuk membangun ekosistem digital Malang yang lebih maju.",
            backgroundColor: "rgba(255, 152, 0, 1)"
        }
    ];

    const getDataNews = async () => {
        try {
            const response = await slideApi();
            setIsNews(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getDataTopNews = async () => {
        try {
            const response = await topNewsApi("top-news");
            setTopNews(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    const getDataTodayNews = async () => {
        try {
            const response = await todayNewsApi();
            setTodayNews(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getDataNews();
        getDataTopNews();
        getDataTodayNews();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBotomSlide((prev) => (prev + 1) % bottomSliderData.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const sliderData = isNews?.slice(0, maxSlide) || [];

    useEffect(() => {
        if (sliderData.length === 0) return;

        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [sliderData.length]);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    };

    const filteredNews = todayNews.filter((item) => {
        return item.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); 
    };

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentTodayNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredNews.length / itemPerPage);

    return (
        <main>
            <div className='slide-group'>
                {sliderData.length > 0 && (
                    <>
                        <SlideCard data={sliderData[currentSlide]} />
                        <SlideButtom 
                            current={currentSlide + 1} 
                            total={sliderData.length} 
                            onNext={handleNextSlide} 
                            onPrev={handlePrevSlide} 
                        />
                    </>
                )}
            </div>
            <div className='popular-news-group'>
                <TitlePages title='Berita Terpopuler' />
                <div className="container-popular-news">
                    {topNews?.slice(0, 3).map((item, index) => {
                        const itemCategory = Array.isArray(item.categories) ? item.categories[0] : (item.categories || "News");
                        const updatedTopItem = {
                            ...item,
                            categories: [itemCategory],
                            sourcePage: "Beranda" 
                        };

                        return (
                            <>
                                <CardPopular key={index} id={encodeURIComponent(updatedTopItem.link)} number={index + 1} image={updatedTopItem.image} title={updatedTopItem.title} date={updatedTopItem.isoDate} fullData={updatedTopItem} />
                                <div className='vertical-line'></div>
                                <div className='vertical-line-2'></div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className='recomended-news-group'>
                <div className='group-filter'>
                    <TitlePages title='Rekomendasi Untuk Anda' />

                    <div className='search'>
                        <input type="text" placeholder='Cari Berita' value={searchQuery} onChange={handleSearchChange} />
                        <img src={SearchIcon} />
                    </div>
                </div>
                <div className="container-recomended-news">
                    {currentTodayNews.length === 0 ? (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px', color: '#888' }}>
                            Berita yang kamu cari tidak ditemukan...
                        </div>
                    ) : (
                            currentTodayNews.map((item, index) => {
                                const itemCategory = Array.isArray(item.categories) ? item.categories[0] : (item.categories || "News");
                                const updatedTodayItem = {
                                    ...item,
                                    categories: [itemCategory],
                                    sourcePage: "Beranda" 
                                };
                    
                                return (
                                    <CardRecomended
                                        key={index}
                                        id={encodeURIComponent(updatedTodayItem.link)}
                                        title={updatedTodayItem.title}
                                        image={typeof updatedTodayItem.image === 'object' ? updatedTodayItem.image?.small : updatedTodayItem.image}
                                        date={updatedTodayItem.isoDate}
                                        category={itemCategory}
                                        fullData={updatedTodayItem}
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
            <div className="slider-bottom-group">
                <CardSlider data={bottomSliderData[currentBotomSlide]} />
                <div className="slider-bottom">
                    {bottomSliderData.map((_, index) => (
                        <div 
                            key={index}
                            className={`dot ${currentBotomSlide === index ? 'dot-active' : ''}`}
                            onClick={() => setCurrentBotomSlide(index)}
                            style={{ cursor: 'pointer' }}
                        ></div>
                    ))}
                </div>
            </div>
        </main>
    )
}
