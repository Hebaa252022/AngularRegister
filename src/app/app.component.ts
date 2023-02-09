import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  @Input() Student: { name: string; age: number }[] = [];
  GetData(data: any) {
    this.Student.push(data);
  }
}
