import { Component } from '@angular/core';
import { titlerows } from '../titleRows';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  titlerows = titlerows;

  simulcastOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      1100: {
        items: 5
      }
    },
    nav: true
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/