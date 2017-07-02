import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'user',
  template: `
    <h3>user work</h3>
  <h1>{{user.name | async }}</h1>
  `,
  styles: [`
  `]
})
export class UserComponent {

  @Input() user: User;
}
