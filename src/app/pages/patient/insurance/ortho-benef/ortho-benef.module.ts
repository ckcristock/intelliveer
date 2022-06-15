import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrthoBenefComponent } from './ortho-benef.component';
import { OrthoBenefRoutingModule } from './ortho-benef-routing.module';
import { TabsModule } from '@modules/tabs/tabs.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OrthoBenefComponent],
  imports: [
    CommonModule,
    OrthoBenefRoutingModule,
    TabsModule,
    NgbModule,
    NgSelectModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class OrthoBenefModule { }
