import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variable } from './Components/variable/variable';
import { DataBinding } from './Components/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Variable, DataBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng_21_wt');
}
