import { CategoryConfigType, CategoryType } from "@/types/categories";

export const categoryConfig: Record<CategoryType, CategoryConfigType> =
  Object.values(CategoryType).reduce((config, type) => {
    config[type] = {
      backgroundImage: `/images/blog_category_image_${type}.png`,
      color: `var(--category-color-${type})`,
      borderColor: `var(--category-selected-border-color-${type})`,
      textColor: `var(--category-text-color-${type})`,
      icon: `/images/icons/${type}_icon.svg`,
      iconWidth: `var(--category-icon-width-${type})`,
      iconHeight: `var(--category-icon-height-${type})`,
    };
    return config;
  }, {} as Record<CategoryType, CategoryConfigType>);
