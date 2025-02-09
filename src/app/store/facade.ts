import { Injectable } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/Credit-card-model';
import { load, payWithCard, payWithCardSuccess } from './actions'
import { CreditCardQuery } from './selectors';

@Injectable()
export class CreditCardPaymentFacade {
  readonly data$: Observable<CreditCard>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(CreditCardQuery.getCreditCardState));
  }

  getCreditCardData() {
    this.store.dispatch(load());
  }

  makePayment(paymentData: CreditCard) {
    this.store.dispatch(payWithCard({paymentData}))
  }

  storeCard(creditCardData) {
    this.store.dispatch(payWithCardSuccess(creditCardData))
  }
}
