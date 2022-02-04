import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const products = [
      {
        id: 1,
        productName: 'White Basmathi Rice',
        createdDate: '2020-01-29',
        quantity: 100,
        unitPrice: 400,
        productDescription:
          'White Basmathi Rice imported from pakistan. High quality rice with extra fragnance. Organically grown.',
      },
      {
        id: 2,
        productName: 'Sugar',
        createdDate: '2020-01-29',
        quantity: 1200,
        unitPrice: 200,
        productDescription: 'White sugar manufactured by Palwatte Factory',
      },

      {
        id: 3,
        productName: 'Flour',
        createdDate: '2020-01-29',
        quantity: 50,
        unitPrice: '190',
        productDescription: 'uper FIne Whole grain general Purpose flour',
      },
      {
        id: 4,
        productName: 'Dhal',
        createdDate: '2020-01-29',
        quantity: 10,
        unitPrice: 200,
        productDescription: 'Imported mysoor dhal from India',
      },
    ];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0
      ? Math.max(...products.map((product) => product.id)) + 1
      : 11;
  }
}
