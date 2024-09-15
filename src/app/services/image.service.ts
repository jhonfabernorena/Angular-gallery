import { Injectable } from '@angular/core';
import { Image } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  getFavorites(): Image[] {
    throw new Error('Method not implemented.');
  }
  isFavorite(id: number): boolean {
    throw new Error('Method not implemented.');
  }
  private images: Image[] = [
    {
      id: 1,
      url: 'https://www.bing.com/ck/a?!&&p=e7d264c660a8719fJmltdHM9MTcyNjM1ODQwMCZpZ3VpZD0zMTJkNjRmNS01MTMwLTYzODEtMTY5ZC03MDE4NTA5ZjYyMjQmaW5zaWQ9NTQ3MA&ptn=3&ver=2&hsh=3&fclid=312d64f5-5130-6381-169d-7018509f6224&u=a1L2ltYWdlcy9zZWFyY2g_cT1hK2JlYXV0aWZ1bCtzdW5zZXQrb3Zlcit0aGUrbW91bnRhaW5zJmlkPUU3N0ZBMEE4MkIxMjgxMEVDRjQ1OTM0Qzk1Qjc0ODc2RkI2RUJFMjMmRk9STT1JUUZSQkE&ntb=1',
      title: 'Sunset',
      description: 'A beautiful sunset over the mountains.',
      category: 'Nature',
      date: new Date('2024-01-01'),
      isFavorite: false
    },
    {
      id: 2,
      url: 'https://www.bing.com/ck/a?!&&p=4d312a82983744d5JmltdHM9MTcyNjM1ODQwMCZpZ3VpZD0zMTJkNjRmNS01MTMwLTYzODEtMTY5ZC03MDE4NTA5ZjYyMjQmaW5zaWQ9NTQ2OQ&ptn=3&ver=2&hsh=3&fclid=312d64f5-5130-6381-169d-7018509f6224&u=a1L2ltYWdlcy9zZWFyY2g_cT1hK2J1c3RsaW5nK2NpdHkrc2t5bGluZSthdCtuaWdodCZpZD00M0UxNkVFNzlCQjVCRTIxRUEzMDY1OUVEODY3N0U2NTQwN0Q1ODVCJkZPUk09SVFGUkJB&ntb=1',
      title: 'Cityscape',
      description: 'A bustling city skyline at night.',
      category: 'Architecture',
      date: new Date('2024-02-01'),
      isFavorite: false
    },
    {
      id: 3,
      url: 'https://www.bing.com/ck/a?!&&p=fb8be9fc9d08df31JmltdHM9MTcyNjM1ODQwMCZpZ3VpZD0zMTJkNjRmNS01MTMwLTYzODEtMTY5ZC03MDE4NTA5ZjYyMjQmaW5zaWQ9NTQ4MA&ptn=3&ver=2&hsh=3&fclid=312d64f5-5130-6381-169d-7018509f6224&u=a1L2ltYWdlcy9zZWFyY2g_cT1hK3Rvd2VyaW5nK21vdW50YWluK2NvdmVyZWQraW4rc25vdy4maWQ9MjE3NEM1Q0UxODk2MjlDQ0RGQkUzMkZEODk5MUE0MUIyOERFRUY4RSZGT1JNPUlRRlJCQQ&ntb=1',
      title: 'Mountain Majesty',
      description: 'A towering mountain covered in snow.',
      category: 'Nature',
      date: new Date('2024-01-15'),
      isFavorite: true
    },
    {
      id: 4,
      url: 'https://www.bing.com/ck/a?!&&p=de2c2459aac14b58JmltdHM9MTcyNjM1ODQwMCZpZ3VpZD0zMTJkNjRmNS01MTMwLTYzODEtMTY5ZC03MDE4NTA5ZjYyMjQmaW5zaWQ9NTUzNg&ptn=3&ver=2&hsh=3&fclid=312d64f5-5130-6381-169d-7018509f6224&u=a1L2ltYWdlcy9zZWFyY2g_cT1hK3ByaXN0aW5lK2JlYWNoK3dpdGgrY2xlYXIrYmx1ZSt3YXRlcnMuJmlkPTg3NEQ3OUFGNkZFOTEwRkM4MjJEOEQ5OEY5N0RCOTkxRkYyRTAzNjUmRk9STT1JUUZSQkE&ntb=1',
      title: 'Sunny Beach',
      description: 'A pristine beach with clear blue waters.',
      category: 'Nature',
      date: new Date('2023-12-25'),
      isFavorite: false
    },
    {
      id: 5,
      url: 'https://www.bing.com/images/search?view=detailV2&ccid=D63YlmBD&id=032FF7D5E56C635A2A4EB2FEC0A053AE8DC99407&thid=OIP.D63YlmBDFCSjn-AB6Y0zCgHaE5&mediaurl=https%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f50000%2fvelka%2fpath-through-the-forest-1375111129KON.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0fadd89660431424a39fe001e98d330a%3frik%3dB5TJja5ToMD%252bsg%26pid%3dImgRaw%26r%3d0&exph=1271&expw=1920&q=A+peaceful+path+through+a+dense+forest&simid=608036729980012285&FORM=IRPRST&ck=F2E2AAD6017F516D1FB5C4689DFEB940&selectedIndex=1&itb=0',
      title: 'Forest Trail',
      description: 'A peaceful path through a dense forest.',
      category: 'Nature',
      date: new Date('2024-03-05'),
      isFavorite: true
    },
    {
      id: 6,
      url: 'https://www.bing.com/ck/a?!&&p=dc9eed830c487a41JmltdHM9MTcyNjM1ODQwMCZpZ3VpZD0zMTJkNjRmNS01MTMwLTYzODEtMTY5ZC03MDE4NTA5ZjYyMjQmaW5zaWQ9NTQ5NA&ptn=3&ver=2&hsh=3&fclid=312d64f5-5130-6381-169d-7018509f6224&u=a1L2ltYWdlcy9zZWFyY2g_cT1hK2ZhbW91cyticmlkZ2UraWxsdW1pbmF0ZWQrYXQrZHVzay4maWQ9NzM5NTJBRkFBQzk5NEY5QzlDRTFENEVGOTM1NzQ5RjAyOTk5Q0M4MCZGT1JNPUlRRlJCQQ&ntb=1',
      title: 'Golden Bridge',
      description: 'A famous bridge illuminated at dusk.',
      category: 'Architecture',
      date: new Date('2024-01-20'),
      isFavorite: false
    },
    {
      id: 7,
      url: 'https://www.bing.com/ck/a?!&&p=9e91385bc01a6b55JmltdHM9MTcyNjM1ODQwMCZpZ3VpZD0zMTJkNjRmNS01MTMwLTYzODEtMTY5ZC03MDE4NTA5ZjYyMjQmaW5zaWQ9NTQ5Mg&ptn=3&ver=2&hsh=3&fclid=312d64f5-5130-6381-169d-7018509f6224&u=a1L2ltYWdlcy9zZWFyY2g_cT1hK3Zhc3QrZGVzZXJ0K2xhbmRzY2FwZSt3aXRoK2ErZGlzdGFudCttaXJhZ2UuJmlkPTEwQTA0ODYxMEM3NThGRDQyQjFEQTg1QTE3MjA4NDU1RDU1MkI4MjcmRk9STT1JUUZSQkE&ntb=1',
      title: 'Desert Mirage',
      description: 'A vast desert landscape with a distant mirage.',
      category: 'Nature',
      date: new Date('2024-02-18'),
      isFavorite: true
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
