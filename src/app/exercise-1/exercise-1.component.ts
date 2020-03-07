import { Component } from '@angular/core';

@Component({
  selector: 'exercise-1',
  templateUrl: './exercise-1.component.html',
  styleUrls: ['./exercise-1.component.css']
})
export class Exercise1Component {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
}
