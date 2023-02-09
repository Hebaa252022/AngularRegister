import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-Student',
    templateUrl: './Student.component.html',
    styleUrls: ['./Student.component.css'],
})
export class StudentComponent {
    @Input() DataFromParent: { name: string; age: number }[] = [];
}
