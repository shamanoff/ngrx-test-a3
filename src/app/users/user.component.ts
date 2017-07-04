import {Component, Input} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'user',
  template: `
    <h4>User Name: {{user.name }}</h4>
    <!--<p>Id: {{user.id}}</p>-->
    <p (click)="editUser(user.id, user)">Edit</p>
    <p (click)="deleteUser(user.id)">Delete</p>
    
  `,
  styles: [`
  `]
})
export class UserComponent {

  @Input() user: User;
}
