import { Component } from '@angular/core';
import { CarouselComponent } from '../../../shared/components/carousel/carousel.component';
import { FeaturedCarouselComponent } from '../../../shared/components/featured-carousel/featured-carousel.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CarouselComponent, FeaturedCarouselComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
