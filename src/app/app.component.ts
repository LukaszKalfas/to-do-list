import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger, transition, query, style, animate, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            style({
              transform: 'translateY(-400px)',
              opacity: 0
            }),
            animate('.3s ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('.3s ease-out', style({
              transform: 'translateY(600px)',
              opacity: 0
            }), )
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  public todayDate;
  constructor(private spinner: NgxSpinnerService) { }


  getAnimationsData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }

  ngOnInit() {
//     /** spinner starts on init */
//     this.spinner.show();
//     setTimeout(() => {
//         /** spinner ends after 2 seconds */
//         this.spinner.hide();
//     }, 2000);

//     this.todayDate = setInterval( () => {
//       this.todayDate = new Date();
// }, 1000);
  }
}
