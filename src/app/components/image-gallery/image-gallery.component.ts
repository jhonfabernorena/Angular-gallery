import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  images: Image[] = [];
  categories: string[] = ['All', 'Nature', 'Technology', 'Architecture'];
  selectedCategory: string = 'All';
  selectedImage: Image | null = null;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  filterImages(): Image[] {
    if (this.selectedCategory === 'All') {
      return this.images;
    }
    return this.images.filter(img => img.category === this.selectedCategory);
  }

  showDetails(image: Image): void {
    this.selectedImage = image;
  }

  toggleFavorite(image: Image): void {
    this.imageService.toggleFavorite(image.id);
  }
}
