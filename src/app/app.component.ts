import { Component, OnInit} from '@angular/core'
import { UserService } from './user.service'
import { NavagationService } from './navagation.service'
@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  constructor (private navagationService: NavagationService) {}
  activityOneView: boolean = true;

  ngOnInit(): void {
    this.navagationService.activityOneView.subscribe((activityOneView: boolean) => this.activityOneView = activityOneView);
  }

}
