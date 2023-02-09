import { Component } from '@angular/core';

@Component({
    selector: 'app-Text',
    templateUrl: './Text.component.html',
    styleUrls: ['./Text.component.css']
})
export class TextComponent {
    firstName = "";
    reset() {
        this.firstName = "";
    }
}