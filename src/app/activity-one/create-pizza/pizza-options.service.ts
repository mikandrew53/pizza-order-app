import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PizzaOption } from './pizzaSizes';

@Injectable({
  providedIn: 'root',
})

export class PizzaOptionsService {
  private sizes: Array<PizzaOption>;
  private toppings: Array<PizzaOption>;
  private price: string;
  private sizeIdx: number;
  private toppingIdx: number;

  pizzaSizeSubject: Subject<string> = new Subject<string>();
  pizzaToppingSubject: Subject<string> = new Subject<string>();
  pizzaPriceSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.sizes = [
      { text: 'Round Pizza 6 slices - serves 3 people ($5.50)', price: 5.5 },
      { text: 'Round Pizza 8 slices - serves 4 people ($7.99)', price: 7.99 },
      { text: 'Round Pizza 10 slices - serves 5 people ($9.50)', price: 9.50 },
      { text: 'Round Pizza 12 slices - serves 6 people ($11.38)', price: 11.38 }
    ]

    this.toppings = [
      { text: 'Mushrooms ($5)', price: 5},
      { text: 'Sun Dried Tomatoes ($5)', price: 5},
      { text: 'Chicken ($7)', price: 7},
      { text: 'Ground beef ($8)', price: 8},
      { text: 'Shrimp ($10)', price: 10},
      { text: 'Pineapple ($5)', price: 5},
      { text: 'Steak ($9)', price: 9},
      { text: 'Avocado ($5)', price: 5},
      { text: 'Tuna ($5)', price: 5},
      { text: 'Broccoli ($8)', price: 8},
    ]


  }

  getSizes(): Array<PizzaOption> {
    return this.sizes;
  }

  getToppings(): Array<PizzaOption> {
    return this.toppings;
  }

  calcPrice(sizeIdx: number, toppingIdx: number): string{
    let price: number = (this.sizes[sizeIdx].price + this.toppings[toppingIdx].price) * 1.13;
    this.price = price.toFixed(2);

    this.toppingIdx = toppingIdx;
    this.sizeIdx = sizeIdx;

    this.pizzaPriceSubject.next(this.price);
    this.pizzaSizeSubject.next(this.sizes[sizeIdx].text);
    this.pizzaToppingSubject.next(this.toppings[toppingIdx].text);

    return this.price;
  }

  getToppingText(): string {
    return this.toppings[this.toppingIdx].text;
  }

  getSizeText(): string {
    return this.sizes[this.sizeIdx].text;
  }

  getPrice(): string {
    return this.price;
  }

}
