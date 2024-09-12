import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageService } from './services/image.service';

@NgModule({
  declarations: [
    AppComponent,
    ImageGalleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
