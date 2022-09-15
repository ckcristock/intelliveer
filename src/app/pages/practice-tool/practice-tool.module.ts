import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticeToolComponent } from './practice-tool.component';
import { PracticeToolRoutingModule } from './practice_tool-routing.module';


@NgModule({
  declarations: [PracticeToolComponent],
  imports: [
    CommonModule,
    PracticeToolRoutingModule
  ]
})
export class PracticeToolModule { }
