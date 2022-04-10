import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementCardComponent } from './components/element-card/element-card.component';
import { ElementComponent } from './components/element/element.component';

const routes: Routes = [
  /* testroute will be used to visualize/test individual components- just change the component the param points to */
  { path: 'testroute', component: ElementCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
