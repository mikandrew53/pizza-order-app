import { Component, OnInit} from '@angular/core';
import { PizzaOptionsService } from '../create-pizza/pizza-options.service';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { NavagationService } from '../../navagation.service';
@Component({
  selector: 'ns-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  activityOneView: boolean = true;
  pizzaSize: string;
  pizzaTopping: string;
  pizzaPrice: string;
  user: User;

  constructor (
    private navagationService: NavagationService,
    private userService: UserService,
    private pizzaOptionsService: PizzaOptionsService
    ) {}

  ngOnInit(): void {
    this.navagationService.activityOneView.subscribe((activityOneView: boolean) => this.activityOneView = activityOneView);

    this.user = this.userService.getUser();
    this.userService.userSubject.subscribe(user => this.user = user);

    this.pizzaSize = this.pizzaOptionsService.getSizeText();
    this.pizzaTopping = this.pizzaOptionsService.getToppingText();
    this.pizzaPrice = this.pizzaOptionsService.getPrice();
    this.pizzaOptionsService.pizzaPriceSubject.subscribe(price => this.pizzaPrice = price);
    this.pizzaOptionsService.pizzaSizeSubject.subscribe(size => this.pizzaSize = size);
    this.pizzaOptionsService.pizzaToppingSubject.subscribe(topping => this.pizzaTopping = topping);
  }

  editPizza() {
    this.navagationService.setActivityOneView(true);
    this.navagationService.setCreateUserView(false);
  }

  confirm() {
  }

}
