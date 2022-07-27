import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarPillsModule } from '@modules/nav-bar-pills/nav-bar-pills.module';
import { AssignRoleRoutingModule } from './assign-role-routing.module';
import { AssignRoleComponent } from './assign-role.component';

@NgModule({
	declarations: [AssignRoleComponent],
	imports: [
		CommonModule,
		AssignRoleRoutingModule,
		NgSelectModule,
		FormsModule,
		ReactiveFormsModule,
		NavBarPillsModule
	]
})
export class AssignRoleModule {}
