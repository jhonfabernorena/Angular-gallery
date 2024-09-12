import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private images: Image[] = [
    {
      id: 1,
      url: 'assets/images/naturaleza-1.jpg',
      title: 'Sunset',
      description: 'A beautiful sunset over the mountains.',
      category: 'Nature',
      date: new Date('2024-01-01'),
      isFavorite: true
    },
    {
      id: 2,
      url: 'assets/images/arquitectura-1.jpg',
      title: 'Cityscape',
      description: 'A bustling city skyline at night.',
      category: 'Architecture',
      date: new Date('2024-02-01'),
      isFavorite: false
    },

  ];

  constructor() {}


  getImages(): Image[] {
    return this.images;
  }


  getFavoriteImages(): Image[] {
    return this.images.filter(image => image.isFavorite);
  }


  toggleFavorite(imageId: number): void {
    const image = this.images.find(img => img.id === imageId);
    if (image) {
      image.isFavorite = !image.isFavorite;
    }
  }
}
