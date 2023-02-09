import { Component } from '@angular/core';

@Component({
    selector: 'app-Slideshow',
    templateUrl: './Slideshow.component.html',
    styleUrls: ['./Slideshow.component.css'],
})
export class SlideshowComponent {
    Src = './assets/images/1.jpg';
    imgs: string[] = [
        './assets/images/1.jpg',
        './assets/images/2.jpg',
        './assets/images/3.jpg',
        './assets/images/4.jpg',
        './assets/images/5.jpg',
    ];
    index = 0;
    c: any; //global so i can see it in the functions

    slideShow() {
        let self = this;
        this.c = setInterval(function () {
            self.Src = self.imgs[self.index];
            self.index++;

            if (self.index >= self.imgs.length) {
                self.index = 0;
            }
        }, 800);
    }

    next() {
        if (this.index < this.imgs.length - 1) {
            this.index++;
            this.Src = this.imgs[this.index];
            //without the if condition it will show the next img and will stop on empty
        }
    }

    pre() {
        if (this.index > 0) {
            this.index--;
            this.Src = this.imgs[this.index];
        }
    }
    stop() {
        clearInterval(this.c);
    }
}
