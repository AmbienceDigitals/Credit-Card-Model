import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterConfig } from 'angular2-toaster';
import { Observable } from 'rxjs';
import { CreditCardPaymentFacade } from './store/facade';
import { CreditCard} from './models/Credit-card-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Credit Card Model';
  toasterConfig: ToasterConfig;
  creditCard$: Observable<CreditCard>;
  
  constructor(private router: Router, private creditCardPaymentFacade: CreditCardPaymentFacade) {

    this.toasterConfig = new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      positionClass: 'toast-top-full-width',
      timeout: 3000
    });
    this.creditCard$ = this.creditCardPaymentFacade.data$;
  }

  ngOnInit() {
    this.creditCard$.subscribe(data => {
    })
  }


  navigate(){
    this.router.navigate(['/payment']);
  }
  
}
