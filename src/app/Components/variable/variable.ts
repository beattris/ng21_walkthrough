import { Component } from '@angular/core';

@Component({
  selector: 'app-variable',
  imports: [],
  templateUrl: './variable.html',
  styleUrl: './variable.css',
})
export class Variable {
  // DECLARING VARIABLES
  courseName: string = 'Ng_21_wt'; //string
  rollNo: number = 123; //number
  productPrice = 12.45; //floating point

  isActive: boolean = true; //boolean
  isPresent = true; //boolean

  currentDate: Date = new Date(); //date

  cityList: string[] = ["Aba", "Ph", "Abj"] //Array of strings

  rollNumber: number[] = [12, 38, 73, 29]   //Array of numbers

  studentDetails = {
    name: 'Tris',
    mobile: '+28230933',
    email: 'tris@mail'
  }     //Object

  multiStudentDetails = [
    { name: 'One', age: 23 },
    { name: 'Two', age: 35 }  
  ]   //Array of objects

  // CONSTRUCTOR - SOMETHING THAT GETS EXECCUTED FIRST WHEN OUR 
  // CLASS OR OBJECT IS INITIATED/RENDERED
  constructor() {
    this.courseName = 'testtest'
  }
}
