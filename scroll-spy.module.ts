import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollSpyDirective } from './scroll-spy.directive';

@NgModule({
  declarations: [ScrollSpyDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollSpyDirective
  ]
})
export class ScrollspyModule { }
