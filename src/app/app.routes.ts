import { Routes } from '@angular/router';
import { DataBinding } from './Components/data-binding/data-binding';
import { SignalComp } from './Components/signal-comp/signal-comp';
import { Variable } from './Components/variable/variable';

export const routes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBinding },
  { path: 'signal', component: SignalComp },
  { path: 'variables', component: Variable },
];
