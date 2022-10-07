import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class NavagationService {
  activityOneView: Subject<boolean> = new Subject<boolean>();
  createUserViewSubject: Subject<boolean> = new Subject<boolean>();
  private createUserView: boolean;

  constructor() {
    this.createUserView = true;
  }

  setActivityOneView(activityOneView: boolean){
    this.activityOneView.next(activityOneView);

    if (activityOneView === true)
      this.setCreateUserView(true);
  }

  setCreateUserView(createUserView: boolean): void {
    this.createUserViewSubject.next(createUserView)
  }

  getCreateUserView(): boolean {
    return this.createUserView;
  }
}
