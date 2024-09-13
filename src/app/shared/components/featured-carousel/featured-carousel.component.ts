import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'featured-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured-carousel.component.html',
  styleUrls: ['./featured-carousel.component.css']
})
export class FeaturedCarouselComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  interval: any;
  touchStartX: number | null = null;
  visibleProducts = 5;

  products = [
    { image: '../../../../assets/feature-carousel-images/product_1.png', title: 'Product 1' },
    { image: '../../../../assets/feature-carousel-images/product_2.png', title: 'Product 2' },
    { image: '../../../../assets/feature-carousel-images/product_3.png', title: 'Product 3' },
    { image: '../../../../assets/feature-carousel-images/product_5.png', title: 'Product 5' },
    { image: '../../../../assets/feature-carousel-images/product_7.png', title: 'Product 6' },
    { image: '../../../../assets/feature-carousel-images/product_12.png', title: 'Product 7' },
    { image: '../../../../assets/feature-carousel-images/product_14.png', title: 'Product 8' },
    { image: '../../../../assets/feature-carousel-images/product_17.png', title: 'Product 9' },
    { image: '../../../../assets/feature-carousel-images/product_20.png', title: 'Product 10' },
  ];

  @HostListener('window:resize')
  onResize() {
    this.updateVisibleProducts();
  }

  ngOnInit() {
    this.updateVisibleProducts();
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  updateVisibleProducts() {
    if (this.isMobile) {
      this.visibleProducts = 1;
    } else if (this.isTablet) {
      this.visibleProducts = 2;
    } else {
      this.visibleProducts = 5;
    }
  }

  get isMobile(): boolean {
    return window.innerWidth < 640;
  }

  get isTablet(): boolean {
    return window.innerWidth >= 640 && window.innerWidth < 1024;
  }

  get isDesktop(): boolean {
    return window.innerWidth >= 1024;
  }

  startAutoScroll() {
    this.interval = setInterval(() => {
      this.next();
    }, 4000);
  }

  stopAutoScroll() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % (this.products.length - this.visibleProducts + 1);
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + (this.products.length - this.visibleProducts + 1)) % (this.products.length - this.visibleProducts + 1);
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    if (this.touchStartX !== null) {
      const touchEndX = event.changedTouches[0].clientX;
      const diff = touchEndX - this.touchStartX;
      if (diff > 20) {
        this.prev();
      } else if (diff < -20) {
        this.next();
      }
      this.touchStartX = null;
    }
  }

  getVisibleProducts() {
    return this.products.concat(this.products.slice(0, this.visibleProducts - 1));
  }
}