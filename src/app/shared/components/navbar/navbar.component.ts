import { trigger, state, style, animate, transition } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out'))
    ])
  ]
})
export class NavbarComponent {
  isMenuOpen = false;
  isDarkMode = false;
  navItems = [
    { name: 'Home', link: '/' },
    // { name: 'About Us', link: '/About' },
    { name: 'Latest News', link: '/News' },
    { name: 'Flyer', link: '/Flyer' },
    { name: 'Special Products', link: '/SpecialProduct' },
    { name: 'New Arrivals', link: '/NewArrivals' },
    { name: 'Recipe', link: '/Recipe' },
    { name: 'Tawseel', link: '/tawseel', target: '_blank' },
    { name: 'Stores', link: '/Stores' },
    // { name: 'Join Us', link: '/Join' },
    // { name: 'Contact US', link: '/Contact' }
  ];


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;

    // Check if the click happened outside of the menu and the toggle button
    if (this.isMenuOpen && !this.elementRef.nativeElement.contains(targetElement)) {
      this.isMenuOpen = false;
    }
  }


}
