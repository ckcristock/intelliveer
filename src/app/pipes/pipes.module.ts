import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenedPipe } from './shortened/shortened.pipe';
import { SearchStringPipePipe } from './stringSearch/search-string-pipe.pipe';



@NgModule({
  declarations: [ShortenedPipe, SearchStringPipePipe],
  imports: [
    CommonModule
  ],
  exports: [ShortenedPipe]
})
export class PipesModule { }
