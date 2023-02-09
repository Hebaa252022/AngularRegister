import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-Register',
    templateUrl: './Register.component.html',
    styleUrls: ['./Register.component.css'],
})
export class RegisterComponent {
    userName = '';
    userAge: any;
    @Output() myEvent = new EventEmitter();

    get AgeValid() {
        return this.userAge <= 30 && this.userAge >= 20;
    }

    get NameValid() {
        return this.userName.length > 3;
    }
    add() {
        let student = { name: this.userName, age: this.userAge };

        if (this.AgeValid && this.NameValid) {
            this.myEvent.emit(student);
            this.userName = "";
            this.userAge = "";
        }
    }
}
