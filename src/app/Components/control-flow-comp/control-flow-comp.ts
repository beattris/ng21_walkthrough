import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-control-flow-comp',
  imports: [FormsModule, RouterLink],
  templateUrl: './control-flow-comp.html',
  styleUrl: './control-flow-comp.css',
})
export class ControlFlowComp {
  isOfferCodeChecked: boolean = false;
  studentScore: number = 0;

  // USING SIGNALS FOR CONTROL FLOW
  isSuccessDivVisible: WritableSignal<boolean> = signal(false);

  toggleDivVisibility() {
    this.isSuccessDivVisible.set(!this.isSuccessDivVisible());
  }

  // USE CASE FOR USING @FOR
  offerList: string[] = [
    '20% off for Opay users',
    '10% off for Moniepoint users',
    '15% off for Prepaid users',
  ];

  productCategoryList: string[] = [
    'Cameras',
    'Laptops',
    'Mobile Phones',
    'Computers',
    'Headphones',
    'Mouse',
    'Keyboards',
  ];

  // SHOWING SPECIFIC TYPE OF DATA
  employeeList = [
    {name: "AAA", city: "jdfhjd", isActive: false},
    {name: "BBB", city: "fgfg", isActive: false},
    {name: "CCC", city: "efrr", isActive: true},
    {name: "DDD", city: "hetet", isActive: true},
    {name: "FFF", city: "strtrw", isActive: false},
    {name: "GGG", city: "kyiky", isActive: false},
    {name: "HHH", city: "itujhn", isActive: true},
    {name: "JJJ", city: "vdjusr", isActive: false},
  ]
}
