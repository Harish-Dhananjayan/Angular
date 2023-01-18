import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
      404 Error . Requested Page is not fount
    </h4>
  `,
  styles: [
    "h4{color:red;font-size:50px}"
  ]
})
export class StatusComponent {

}
