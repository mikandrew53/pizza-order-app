import { Component, OnInit } from '@angular/core';
import { NavagationService } from '~/app/navagation.service';
import { User } from '../../user';
import { UserService } from '../../user.service';

@Component({
  selector: 'ns-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  moduleId: module.id
})

export class CreateUserComponent implements OnInit{
  user: User;

  constructor(
    private userService: UserService,
    private navagationService: NavagationService) {}

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  saveUser() {
    this.userService.setUser(this.user);
    this.navagationService.setCreateUserView(false);
  }
}
