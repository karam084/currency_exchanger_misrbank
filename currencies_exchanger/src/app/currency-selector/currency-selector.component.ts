import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
import {Currency} from "../Currency";
import {CurrencyServiceComponent} from "../currency-service/currency-service/currency-service.component"

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent {
  public edited = true;
  @Input() changeCurrency: any;
  @Input() selectorId: any;

  currencies: string | any[] | undefined;

  public selectedCurrency: Currency | undefined;
  public elementCurrenciesList: HTMLElement = document.createElement('div');
  public findCurrency: string = '';
  public ignoreFocusOut=false;
  public noResultsFind = false;
  @ViewChild('search_input', {static: false}) search_input: { nativeElement: { focus: () => void; }; } | undefined;

  constructor(private changeDetector: ChangeDetectorRef,  public service: CurrencyServiceComponent) {

  }



  public valueFinding() {

    this.currencies=this.service.getCurrencies().filter(item =>
      item.name.toLowerCase().includes(this.findCurrency.toLowerCase())
      || item.full_name.toLowerCase().includes(this.findCurrency.toLowerCase())
    );

    this.noResultsFind = this.currencies.length == 0;
  }


  selectCurrency = (currency: Currency): void =>{
    this.selectedCurrency = currency;
    this.changeCurrency(currency);
    this.HideDropdown();

    localStorage.setItem(this.selectorId, currency.name);
  }

  ShowDropdown()
  {
    console.log("showDropdown");
    this.edited = false;
     this.elementCurrenciesList.className = "dropdown-menu scrollable-menu show";
  }

  HideDropdown()
  {
    console.log("hideDropdown");
   this.edited = true;
   this.elementCurrenciesList.className = "dropdown-menu scrollable-menu";
  }


  dropClick(){
    this.findCurrency="";
    this.ShowDropdown();
    this.changeDetector.detectChanges();
    this.search_input?.nativeElement.focus();
    this.valueFinding();
  }

  focusOutInput(){
    if(!this.ignoreFocusOut)
      this.HideDropdown();
  }

  private selectCurrencyOnStart(){
    let data
    let localData = localStorage.getItem(this.selectorId);
    if(localData)
      data = this.service.getCurrencies().find(element => element.name==localData);
    if(!data)
      data = this.service.getCurrencies().find(element => element.name==(this.selectorId == 'from' ? 'EUR' : 'USD'));
    if(data)
    this.selectCurrency(data);
  }

  ngAfterViewInit(): void{

    this.elementCurrenciesList = document.getElementById(this.selectorId + "_list") as HTMLElement;
    this.selectCurrencyOnStart();

  }

  ngOnInit(): void {
    this.currencies = this.service.getCurrencies();

    this.selectedCurrency = this.service.getCurrencies()[0];
    this.changeCurrency(this.service.getCurrencies()[0]);

  }


}
