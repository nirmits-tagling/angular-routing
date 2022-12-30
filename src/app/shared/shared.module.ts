import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './header/header.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { MainSectionComponent } from './main-section/main-section.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ServiceComponent,
    BlogComponent,
    MainSectionComponent

 
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  
  exports:[HeaderComponent,ServiceComponent,BlogComponent,MainSectionComponent]
})
export class SharedModule { }
