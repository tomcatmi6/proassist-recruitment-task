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
    textColor: string;
    iconWidth: string;
    iconHeight: string;
};