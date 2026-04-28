import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'github-users';
  searchTerm: string = '';

  constructor(private searchService: SearchService) {}

  onSearchChange(term: string): void {
    this.searchService.setSearchTerm(term);
  }
}
