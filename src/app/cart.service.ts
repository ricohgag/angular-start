import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [];
  constructor() { }

  addCart(product) {
    this.items.push(product)
  }

  getItems() {
    return this.items;
  }

  cleanCart() {
    this.items = [];
  }

}