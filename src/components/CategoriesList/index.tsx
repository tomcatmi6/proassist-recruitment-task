import { useTranslations } from 'next-intl';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // base Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CategoryCard from '../CategoryCard';

export enum CategoryType {
    KNOWLEDGE = 'knowledge',
    INSPIRATIONS = 'inspirations',
    INTERPRETATIONS = 'interpretations',
    AVAILABLE = 'available'
}

// export default CategoryType;

const CategoriesList: React.FC = () => {
    const t = useTranslations('categoriesList');

    return (
        <div className="categories-list-wrapper">
            <h2 className="categories-list-title">{t('title')}</h2>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                className='categories-list-swiper'
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-dot"></span>`;
                    }
                }}
                modules={[Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
            >
                {Object.values(CategoryType).map((category) => (
                    <SwiperSlide key={category}>
                        <CategoryCard name={category} isSelected={true} handleClick={() => null} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CategoriesList;