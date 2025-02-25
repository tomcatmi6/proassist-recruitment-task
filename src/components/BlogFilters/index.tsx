import React from 'react';
import { CategoryType } from '@/types/categories';
import { useTranslations } from 'next-intl';
import { categoryConfig } from '../CategoriesList/categoriesConfig';
import Image from 'next/image';

interface BlogFiltersProps {
  selectedCategories: CategoryType[];
  onCategoryRemove: (category: CategoryType) => void;
  showAll: boolean;
  onToggleShowAll: (value: boolean) => void;
  sortOrder: 'newest' | 'oldest';
  onSortChange: (value: 'newest' | 'oldest') => void;
}

const BlogFilters: React.FC<BlogFiltersProps> = ({
  selectedCategories,
  onCategoryRemove,
  showAll,
  onToggleShowAll,
  sortOrder,
  onSortChange,
}) => {
    const t = useTranslations('blogFilters');

  return (
    <section className="filter-wrapper">
      <div className="filter-header">
        <h2 className="filter-heading">
            {t('title')}
        </h2>

        <div className="selected-categories">
          {selectedCategories.map((category) => (
            <span key={category} className="category-item">
              <span className={`category-item-name ${category}`}
              style={{color: categoryConfig[category].borderColor}} 
              >
              {t(category)}

              </span>
              <button
                type="button"
                className="remove-category"
                onClick={() => onCategoryRemove(category)}
              >
               <Image src="/images/icons/x_icon.svg" alt="Remove category" width={10} height={10} />
              </button>
            </span>
          ))}
        </div>
      </div>

        <div className="filter-show">
          <button
            type="button"
            className={`filter-show-button ${showAll ? 'active' : ''}`}
            onClick={() => onToggleShowAll(true)}
          >
            {t('all')}
          </button>
          /
          <button
            type="button"
            className={`filter-show-button ${!showAll ? 'active' : ''}`}
            onClick={() => onToggleShowAll(false)}
          >
            {t('favourites')}
          </button>
        </div>

        <div className="filter-sort">
          <select
            value={sortOrder}
            onChange={(e) =>
              onSortChange(e.target.value as 'newest' | 'oldest')
            }
          >
            <option value="newest">{t('newest')}</option>
            <option value="oldest">{t('oldest')}</option>
          </select>
        </div>
    </section>
  );
};

export default BlogFilters;