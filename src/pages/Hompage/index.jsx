import React from 'react';
import './style.css'
import SearchIcon from '../../assets/search-icon.svg';
import SlideCard from '../../components/SlideCard';
import SlideButtom from '../../components/SlideButton';
import TitlePages from '../../components/TitlePages';
import CardPopular from '../../components/CardPopular';
import CardRecomended from '../../components/CardRecomended';
import Pagination from '../../components/Pagination';
import CardSlider from '../../components/CardSlider';

export default function Homepage() {
    return (
        <main>
            <div className='slide-group'>
                <SlideCard />
                <SlideButtom />
            </div>
            <div className='popular-news-group'>
                <TitlePages title='Berita Terpopuler' />
                <div className="container-popular-news">
                    <CardPopular />
                    <div className='vertical-line'></div>
                    <CardPopular />
                    <div className='vertical-line-2'></div>
                    <CardPopular />
                </div>
            </div>
            <div className='recomended-news-group'>
                <div className='group-filter'>
                    <TitlePages title='Rekomendasi Untuk Anda' />

                    <div className='search'>
                        <input type="text" placeholder='Cari Berita' />
                        <img src={SearchIcon} />
                    </div>
                </div>
                <div className="container-recomended-news">
                    <CardRecomended />
                    <CardRecomended />
                    <CardRecomended />
                    <CardRecomended />
                    <CardRecomended />
                    <CardRecomended />
                    <CardRecomended />
                    <CardRecomended />
                </div>
                <Pagination />
            </div>
            <div className="slider-bottom-group">
                <CardSlider />
                <div className="slider-bottom">
                    <div className='dot'></div>
                    <div className='dot dot-active'></div>
                    <div className='dot'></div>
                </div>
            </div>
        </main>
    )
}
