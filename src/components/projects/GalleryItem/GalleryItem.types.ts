import { GalleryItem as GalleryItemType } from '@/lib/projects-data';

export interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  projectTitle: string;
}
