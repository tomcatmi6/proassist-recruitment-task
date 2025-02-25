import { useTranslations } from "next-intl";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // base Swiper styles
import "swiper/css/navigation";
import CategoryCard from "../CategoryCard";
import { CategoryType } from "@/types/categories";

interface CategoriesListProps {
  selectedCategories: CategoryType[];
  onCategorySelect: (category: CategoryType) => void;
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  onCategorySelect,
  selectedCategories = [],
}) => {
  const t = useTranslations("categoriesList");

  const isSelected = (category: CategoryType) =>
    selectedCategories.includes(category);
  return (
    <section className="categories-list-wrapper">
      <h2 className="categories-list-title">{t("title")}</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlidesBounds={true}
        centeredSlides={true}
        className="categories-list-swiper"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-dot"></span>`;
          },
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: false,
            centeredSlidesBounds: false,
          },
          1064: {
            slidesPerView: 2,
            centeredSlides: false,
            centeredSlidesBounds: false,
            spaceBetween: 54,
          },
          1200: {
            slidesPerView: 4,
            centeredSlides: false,
            centeredSlidesBounds: false,
            spaceBetween: 54,
          },
        }}
      >
        {Object.values(CategoryType).map((category) => (
          <SwiperSlide key={category} className="categories-list-slide">
            <CategoryCard
              name={category}
              isSelected={isSelected(category)}
              handleClick={() => onCategorySelect(category)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategoriesList;
