import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent {

  @Input() selectCurrency;
  @Input() currency;


  public selectCurrencyFunc(currency){
    console.log(currency);
    this.selectCurrency(currency);
  }

}
