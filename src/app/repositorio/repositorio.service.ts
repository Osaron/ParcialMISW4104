import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repositorio } from './repositorio';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {

  private apiUrl: string = environment.reposUrl;

  constructor(private http: HttpClient) { }

  getRepositorios(): Observable<Repositorio[]> {
    return this.http.get<Repositorio[]>(this.apiUrl);
  }
}
