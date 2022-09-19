import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Carteira } from 'src/model/carteira.model';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  carteira: Carteira[] = [];
  descricao: string = "";
  selected: number = -1;
  constructor(
    private cardComponent: CardComponent
  ) {}

  ngOnInit(): void {
  }

  pesquisa(): void{
    this.carteira = JSON.parse(localStorage.getItem('carteira'));

    if (this.descricao)
      this.carteira = this.carteira.filter(element => element.descricao.toUpperCase().includes((this.descricao).toUpperCase()));

    if (+this.selected > -1)
      this.carteira = this.carteira.filter(element => element.status === Number(this.selected));

    this.cardComponent.atualiza(this.carteira);
  }

  clear() :void{
    this.descricao = "";
    this.selected = -1;
    this.carteira = this.carteira = JSON.parse(localStorage.getItem('carteira'));
    this.cardComponent.atualiza(this.carteira);
  }

}
