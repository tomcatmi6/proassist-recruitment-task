import { useTranslations } from 'next-intl';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'; // base Swiper styles
import 'swiper/css/navigation';
import CategoryCard from '../CategoryCard';
import { CategoryType } from '@/types/categories';

const CategoriesList: React.FC = () => {
    const t = useTranslations('categoriesList');

    return (
        <section className="categories-list-wrapper">
            <h2 className="categories-list-title">{t('title')}</h2>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                centeredSlidesBounds={true}
                centeredSlides={true}
                className='categories-list-swiper'
                pagination={{
                    clickable: true,
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-dot"></span>`;
                    }
                }}
                modules={[Pagination, Navigation]}
                navigation={true}
                breakpoints={{
                    768: { slidesPerView: 2, centeredSlides: false, centeredSlidesBounds: false },
                    1024: { slidesPerView: 4, centeredSlides: false, centeredSlidesBounds: false }
                }}
            >
                {Object.values(CategoryType).map((category) => (
                    <SwiperSlide key={category}>
                        <CategoryCard name={category} isSelected={true} handleClick={() => null} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CategoriesList;