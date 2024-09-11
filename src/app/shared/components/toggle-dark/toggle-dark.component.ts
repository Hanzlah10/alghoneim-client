import { Component } from '@angular/core';
import { PersistenceService } from '../../services/persistence.service';

@Component({
  selector: 'toggle-dark',
  standalone: true,
  imports: [],
  templateUrl: './toggle-dark.component.html',
  styleUrl: './toggle-dark.component.css'
})
export class ToggleDarkComponent {
  constructor(private persistence: PersistenceService) { }

  ngOnInit(): void {
    // Check the initial state
    if (this.persistence.get('theme') === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

  }

  toggleDarkMode(): void {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      this.persistence.set('theme', 'dark');
    } else {
      this.persistence.set('theme', 'light');
    }
  }
}
