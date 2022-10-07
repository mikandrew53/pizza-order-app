import { Component, OnInit } from '@angular/core';
import { NavagationService } from '~/app/navagation.service';
import { PizzaOptionsService } from './pizza-options.service'

@Component({
  selector: 'ns-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css'],
  moduleId: module.id
})

export class CreatePizzaComponent implements OnInit{
  sizes: Array<string> = [];
  sizesArrayIdx: number = 1;

  pizzaToppings: Array<string> = [];
  pizzaToppingsArrayIdx: number = 1;

  currentPrice: string;

  constructor(
    private pizzaOptionsService: PizzaOptionsService,
    private navagationService: NavagationService
    ) {}

  ngOnInit(): void {
    this.pizzaOptionsService.getSizes().forEach(size => this.sizes.push(size.text) );
    this.pizzaOptionsService.getToppings().forEach(topping => this.pizzaToppings.push(topping.text) );
    this.calcPrice();
  }

  onSelectSize(event) {
    this.sizesArrayIdx = event.value;
    this.calcPrice();
  }
  onSelectTopping(event) {
    this.pizzaToppingsArrayIdx = event.value;
    this.calcPrice();
  }

  calcPrice(){
    this.currentPrice = this.pizzaOptionsService.calcPrice(this.sizesArrayIdx, this.pizzaToppingsArrayIdx);
  }

  checkout() {
    this.navagationService.setActivityOneView(false);
  }

  previous() {
    this.navagationService.setCreateUserView(true);
  }
}
