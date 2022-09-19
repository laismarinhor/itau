import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarteiraComponent } from './components/carteira/carteira.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltroComponent } from './components/carteira/filtro/filtro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './components/carteira/card/card.component';
import { CarteiraService } from './service/carteira.service';

@NgModule({
  declarations: [
    AppComponent,
    CarteiraComponent,
    HeaderComponent,
    FiltroComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CarteiraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
