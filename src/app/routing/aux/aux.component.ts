import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aux-component',
  template: `
    <p>
      Aux Component Works!
    </p>
  `,
  styles: []
})
export class AuxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
