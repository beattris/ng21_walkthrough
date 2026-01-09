import { Routes } from '@angular/router';
import { DataBinding } from './Components/data-binding/data-binding';
import { SignalComp } from './Components/signal-comp/signal-comp';
import { Variable } from './Components/variable/variable';
import { NotFoundComponent } from './Components/not-found-component/not-found-component';

export const routes: Routes = [
  { path: '', redirectTo: 'databinding', pathMatch: 'full' },
  { path: 'databinding', component: DataBinding },
  { path: 'signal', component: SignalComp },
    { path: 'variables', component: Variable },
  {path: '**', component: NotFoundComponent}
];
