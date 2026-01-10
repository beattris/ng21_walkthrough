import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-comp',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './dynamic-css-comp.html',
  styleUrl: './dynamic-css-comp.css',
})
export class DynamicCssComp {
  myClassName: string = 'bg-warning';

  isActive: boolean = false;

  productPrice: number = 500;

  isSidePanelOpen = signal(false);

  // USING NG STYLE
  divBackColor: string = '';

  myCss = {
    color: 'white',
    backgroundColor: 'black',
    fontSize: '35px',
  };

  openSidePanel() {
    this.isSidePanelOpen.set(true)
  };
  closeSidePanel() {
    this.isSidePanelOpen.set(false)
  };
}
