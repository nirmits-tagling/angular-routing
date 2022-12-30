import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { MainSectionComponent } from './shared/main-section/main-section.component';
import { ServiceComponent } from './shared/service/service.component';

const routes: Routes = [

  {
    path:'services',
    component:ServiceComponent
  },
  {
    path:'mainSection',
    component:MainSectionComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
