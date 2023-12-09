import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['../currency-selector.component.scss']
})
export class CurrenciesComponent{

  @Input() selectCurrency: any;
  @Input() currency: any;


  public selectCurrencyFunc(currency: any){
    console.log(currency);
    this.selectCurrency(currency);
  }

}
