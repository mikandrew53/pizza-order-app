import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular'

import { AppComponent } from './app.component'
import { ActivityOneComponent } from './activity-one/activity-one.component'
import { CreateUserComponent } from './activity-one/create-user/create-user.component'
import { CreatePizzaComponent } from './activity-one/create-pizza/create-pizza.component'
import { CheckoutComponent } from './activity-one/checkout/checkout.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule
  ],
  declarations: [
    AppComponent,
    ActivityOneComponent,
    CreateUserComponent,
    CreatePizzaComponent,
    CheckoutComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
