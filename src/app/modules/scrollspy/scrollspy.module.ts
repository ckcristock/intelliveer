import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyDirective } from '../../directives/scrollspy';

@NgModule({
  declarations: [ScrollSpyDirective],
  imports: [
    CommonModule
  ],
  exports:[
    ScrollSpyDirective
  ]
})
export class ScrollspyModule { }
