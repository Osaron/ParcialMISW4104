import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Repositorio } from '../repositorio';
import { RepositorioService } from '../repositorio.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css']
})
export class RepositorioListComponent implements OnInit, OnDestroy {

  repositorios: Array<Repositorio> = [];
  allRepositorios: Array<Repositorio> = [];
  private searchSub!: Subscription;

  constructor(
    private repositorioService: RepositorioService,
    private searchService: SearchService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onSelected(repo: Repositorio): void {
    const isCurrentlySelected = this.isRepoSelected(repo);
    
    if (isCurrentlySelected) {
      // Toggle off: navigate back to the list
      this.router.navigate(['/repositorios']);
    } else {
      // Select new repo
      this.router.navigate([repo.id], { relativeTo: this.route });
    }
  }

  isRepoSelected(repo: Repositorio): boolean {
    return this.router.url.endsWith(`/repositorios/${repo.id}`);
  }

  getRepositorios(): void {
    this.repositorioService.getRepositorios().subscribe((repositorios) => {
      this.allRepositorios = repositorios;
      this.repositorios = repositorios;
    });
  }

  private filterRepositorios(term: string): void {
    if (!term || term.trim() === '') {
      this.repositorios = this.allRepositorios;
      return;
    }
    const lower = term.toLowerCase();
    this.repositorios = this.allRepositorios.filter(r =>
      r.name.toLowerCase().includes(lower) ||
      r.description.toLowerCase().includes(lower) ||
      r.language.toLowerCase().includes(lower)
    );
  }

  ngOnInit() {
    this.getRepositorios();
    this.searchSub = this.searchService.searchTerm$.subscribe(term => {
      this.filterRepositorios(term);
    });
  }

  ngOnDestroy() {
    if (this.searchSub) {
      this.searchSub.unsubscribe();
    }
  }

}
