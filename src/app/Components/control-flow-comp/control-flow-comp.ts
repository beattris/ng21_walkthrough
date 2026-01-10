import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow-comp',
  imports: [FormsModule],
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
  };

  // 
}
