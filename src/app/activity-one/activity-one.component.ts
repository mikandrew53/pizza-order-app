import { Component, OnInit } from '@angular/core';
import { NavagationService } from '../navagation.service';

@Component({
  selector: 'ns-activity-one',
  templateUrl: './activity-one.component.html',
  styleUrls: ['./activity-one.component.css'],
  moduleId: module.id
})

export class ActivityOneComponent implements OnInit{
  createUserView: boolean = true;
  activityOneView: boolean = true;
  constructor(private navagationService: NavagationService) {}

  ngOnInit(): void {
    this.createUserView = this.navagationService.getCreateUserView();
    this.navagationService.activityOneView.subscribe(activityOneView => this.activityOneView = activityOneView);
    this.navagationService.createUserViewSubject.subscribe(createUserView => this.createUserView = createUserView);
  }




}
