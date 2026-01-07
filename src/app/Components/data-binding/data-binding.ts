import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // DATA BINDING IS SIMPLY HOW WE BOUND THE DATA IN A TS
  // CLASS TO UNTO THE UI.

  courseName = "Angular 21 walk through"

  // STORING AND USING CLASSNAMES FROM THE TS FILE
  className = "primary"
}
