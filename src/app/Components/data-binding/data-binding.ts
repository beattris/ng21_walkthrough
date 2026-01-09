import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // DATA BINDING IS SIMPLY HOW WE BOUND THE DATA IN A TS
  // CLASS TO UNTO THE UI.

  courseName = 'Angular 21 walk through';

  // STORING AND USING CLASSNAMES FROM THE TS FILE
  className = 'primary';

  inputType = 'date';

  // FUNCTIONS CREATION
  showMessage() {
    alert('Welcome User');
  }

  onStateChanged() {
    alert('Option changed');
  }

  // CREATING FXNS VALUES CAN BE PASSED TO
  onChangeCourseName(text:string) {
    this.courseName = text;
  };
}
