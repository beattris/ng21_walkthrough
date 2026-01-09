import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal-comp',
  imports: [],
  templateUrl: './signal-comp.html',
  styleUrl: './signal-comp.css',
})
export class SignalComp {
  // courseName: string = 'NG 21';

  // CREATING A SIGNAL
  courseName = signal('NG 21');

  // WE CAN STORE OTHER THINGS IN A SIGNAL (NOT JUST STRINGS)
  rollNumber = signal(1234);
  studentDetails = signal({ name: 'Tris', city: 'Lagos' });
  cityList = signal(['Lag', ' Ph', ' Abj']);

  // HOW TO GIVE A SIGNAL A DATATYPE
  courseDuration: Signal<string> = signal('Three Months');

  // CREATING A FXN TO CHANGE A SIGNAL
  onChangeCourseName() {
    this.courseName.set("Java")
  };

  constructor() {
    console.log('Before' + this.courseName());

    setTimeout(() => {
      // TO CHANGE A 'SIGNAL' YOU USE THE SET() METHOD
      this.courseName.set('VUE JS');
      console.log('After' + this.courseName());
    }, 3000);
  }
}
