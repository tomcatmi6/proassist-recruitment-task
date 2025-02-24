import React from 'react';
import { CategoryType } from '../CategoriesList';
import Image from 'next/image';
import { categoryConfig } from '../CategoriesList/categoriesConfig';
import { useTranslations } from 'next-intl';

interface CategoryCardProps {
  name: CategoryType;
  isSelected: boolean;
  handleClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, isSelected=true, handleClick }) => {
  const { backgroundImage, icon, color, borderColor, iconWidth, iconHeight } = categoryConfig[name];
    const t = useTranslations('categoriesList');

  return (
    <div
    className={`category-card-container ${isSelected ? 'selected' : ''}`}
    style={{ border: `6px solid ${isSelected ? borderColor : 'transparent'}`}}
    onClick={() => handleClick()}
    role="button"
      tabIndex={0}
    >
       <div 
        className="category-card-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="category-card-content" style={{ backgroundColor: color }}>
      <h2 className="category-card-title">{t(name)}</h2>
        <div className="category-card-icon-container"  style={{ width: iconWidth, height: iconHeight }}>

        <Image
          src={icon}
          alt={`Icon for ${name} category`}
          layout="fill"
          objectFit="contain"
        />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;