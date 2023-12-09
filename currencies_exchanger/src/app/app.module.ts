import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currency-selector/currencies/currencies.component';
import { FormsModule } from '@angular/forms';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyServiceComponent } from './currency-service/currency-service/currency-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencySelectorComponent,
    CurrenciesComponent,
    CurrencyServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [CurrencyServiceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
