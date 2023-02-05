import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LigeiaVideochatComponent } from './videochat/videochat.component';

const routes: Routes = [
  { 
    path: '', 
    component: LigeiaVideochatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
