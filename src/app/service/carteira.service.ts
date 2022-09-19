import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carteira } from 'src/model/carteira.model';

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {
  carteiraUrl = 'http://localhost:3000';

  constructor(
      private http: HttpClient
    ) { }

  getCarteira(): Observable<Carteira[]> {
      return this.http.get<Carteira[]>(`${ this.carteiraUrl }/carteira`);
  }
}
