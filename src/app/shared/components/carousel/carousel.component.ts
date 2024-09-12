import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  slides = [
    {
      imageUrl: '../../../../assets/new-carousel/pic1.jpg',
      title: 'Summer Sale Spectacular!',
      description: 'Enjoy up to 50% off on all summer essentials. Limited time offer!'
    },
    {
      imageUrl: '../../../../assets/new-carousel/pic2.jpg',
      title: 'New Arrivals: Fall Collection',
      description: 'Discover our latest styles for the upcoming season. Shop now!'
    },
    {
      imageUrl: '../../../../assets/new-carousel/pic3.jpg',
      title: 'Exclusive Online Deals',
      description: 'Shop from the comfort of your home and save big on our online exclusives.'
    },
    {
      imageUrl: '../../../../assets/new-carousel/pic4.jpg',
      title: 'Clearance: Last Chance',
      description: "Final reductions on clearance items. Don't miss out on these incredible savings!"
    }
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Loop back to the first slide
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.slides.length - 1; // Loop to the last slide
    }
  }

  selectSlide(index: number) {
    this.currentSlide = index;
  }

  ngOnDestroy() {
    clearInterval(this.slideInterval);
  }


}

