import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientUserComponent } from './patient-user.component';
import { PatientUserRoutingModule } from './patient-user-routing.module';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';


@NgModule({
  declarations: [
    PatientUserComponent
  ],
  imports: [
    CommonModule,
    PatientUserRoutingModule,
  ],
  providers: [SearchStringPipePipe]
})
export class PatientUserModule { }
