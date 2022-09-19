import { Component, Injectable, OnInit } from '@angular/core';
import { Carteira } from 'src/model/carteira.model';
import { CarteiraService } from 'src/app/service/carteira.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class CardComponent implements OnInit {

  carteira: Carteira[];
  sucesso = true;

  carteiraUrl = 'http://localhost:3000/carteira';

  constructor(
    private carteiraService: CarteiraService
   ) {}

  ngOnInit(): void {
    this.getCarteira();
  }

  getCarteira(): void{
    this.carteiraService.getCarteira()
      .subscribe(
        resultado => {
          this.carteira = resultado;
          localStorage.setItem('carteira', JSON.stringify(this.carteira));
        },
        erro => {
          this.sucesso = false;
          if(erro.status == 404) {
            console.log('Carteira não localizado.');
          }
        }
      );
  }

  public atualiza(carteira: Carteira[]): void{
    this.carteira = carteira;
  }
}
