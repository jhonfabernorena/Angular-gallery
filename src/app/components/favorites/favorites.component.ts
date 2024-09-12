import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Image } from '../../models/image.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favoriteImages: Image[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.favoriteImages = this.imageService.getFavoriteImages();
  }
}
