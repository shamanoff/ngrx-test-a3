import {Component, Input} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'user',
  template: `
  <h4>User Name: {{user.name }}</h4>
    <p>Id: {{user.id}}</p>
  `,
  styles: [`
  `]
})
export class UserComponent {

  @Input() user: User;
}
