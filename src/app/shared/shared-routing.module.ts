import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path:'servicedata',
    component:ServiceComponent
  },
  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'mainSection',
    component:MainSectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
