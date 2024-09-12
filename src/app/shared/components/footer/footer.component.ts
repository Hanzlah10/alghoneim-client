import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  footerContent = [
    {
      title: 'Customer Services',
      subtitles: [
        { text: 'FAQ', href: '/faq' },
        { text: 'Returns', href: '/returns' },
        { text: 'Shipping', href: '/shipping' }
      ]
    },
    {
      title: 'About Us',
      subtitles: [
        { text: 'Our Story', href: '/our-story' },
        { text: 'Careers', href: '/careers' },
        { text: 'Press', href: '/press' }
      ]
    },
    {
      title: 'Shop',
      subtitles: [
        { text: 'New Arrivals', href: '/new-arrivals' },
        { text: 'Best Sellers', href: '/best-sellers' },
        { text: 'Sale', href: '/sale' }
      ]
    }
  ];

  socialMedia = [
    { name: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { name: 'Twitter', href: 'https://twitter.com', icon: 'twitter' }
  ];

  locale = 'en'; // Simulating language setting

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log('Email submitted');
  }
}

