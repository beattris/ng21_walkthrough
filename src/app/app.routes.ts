import { Routes } from '@angular/router';
import { DataBinding } from './Components/data-binding/data-binding';
import { SignalComp } from './Components/signal-comp/signal-comp';
import { Variable } from './Components/variable/variable';

export const routes: Routes = [
  { path: 'Databinding', component: DataBinding },
  { path: 'Signal', component: SignalComp },
  { path: 'Variables', component: Variable },
];
