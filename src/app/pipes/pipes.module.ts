import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenedPipe } from './shortened/shortened.pipe';



@NgModule({
  declarations: [ShortenedPipe],
  imports: [
    CommonModule
  ],
  exports: [ShortenedPipe]
})
export class PipesModule { }
