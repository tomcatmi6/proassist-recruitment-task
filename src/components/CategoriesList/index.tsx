import { useTranslations } from 'next-intl';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

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
        <h2>{t('title')}</h2>
        <Swiper spaceBetween={50} slidesPerView={1}>
            {Object.values(CategoryType).map((category) => (
                <SwiperSlide key={category}>
                    <div>{category}</div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};

export default CategoriesList;