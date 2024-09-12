import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'featured-carousel',
  standalone: true,
  imports: [CommonModule],

  templateUrl: './featured-carousel.component.html',
  styleUrl: './featured-carousel.component.css'
})
export class FeaturedCarouselComponent {
  currentIndex = 0;
  interval: any;
  products = [

    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 1',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 2',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 3',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 4',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 5',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 6',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 7',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 8',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 9',
    },
    {
      image: '../../../../assets/feature-carousel-images/product_7.png',
      title: 'Product 10',
    },
  ]

  get isMobile(): boolean {
    return window.innerWidth < 640;
  }

  get isTablet(): boolean {
    return window.innerWidth >= 640 && window.innerWidth < 1024;
  }

  get isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  ngOnInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  startAutoScroll() {
    this.interval = setInterval(() => {
      this.next();
    }, 5000);
  }

  stopAutoScroll() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
  }


}
