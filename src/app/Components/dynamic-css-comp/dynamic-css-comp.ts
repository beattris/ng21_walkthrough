import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-comp',
  imports: [NgClass, FormsModule],
  templateUrl: './dynamic-css-comp.html',
  styleUrl: './dynamic-css-comp.css',
})
export class DynamicCssComp {
  myClassName: string = "bg-warning";

  isActive: boolean = false;  

  productPrice: number = 500;
}
