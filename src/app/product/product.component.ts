import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  DoCheck,
  OnDestroy
  } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();
  today = new Date();

  constructor() {
    console.log('constructor');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges = ', changes);
  // }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('Do check');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  addCar(): void {
    console.log('Añadido');
    this.productClicked.emit(this.product.id);
  }

}
