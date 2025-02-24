export enum CategoryType {
    KNOWLEDGE = 'knowledge',
    INSPIRATIONS = 'inspirations',
    INTERPRETATIONS = 'interpretations',
    AVAILABLE = 'available',
  }
export type CategoryConfigType = {
    backgroundImage: string;
    icon: string;
    color: string;
    borderColor: string;
    iconWidth: string;
    iconHeight: string;
};

export const categoryConfig: Record<CategoryType, CategoryConfigType> = Object.values(CategoryType).reduce((config, type) => {
    config[type] = {
        backgroundImage: `/images/blog_category_image_${type}.png`,
        borderColor: `var(--category-selected-border-color-${type})`,
        icon: `/images/icons/${type}_icon.svg`,
        color: `var(--category-color-${type})`,
        iconWidth: `var(--category-icon-width-${type})`,
        iconHeight: `var(--category-icon-height-${type})`,
    };
    return config;
}, {} as Record<CategoryType, CategoryConfigType>);
