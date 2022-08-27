import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  BusinessGroupDropdownService,
  SelectedBusinessGroup,
} from '@services/business-group-dropdown/business-group-dropdown.service';
import { GlobalRoutesService } from '@services/global-routes/global-routes.service';
import { LegalEntityService } from '@services/onboarding/legal-entity/legal-entity.service';
import { Subscription } from 'rxjs';
import { SearchStringPipePipe } from 'src/app/pipes/stringSearch/search-string-pipe.pipe';

@Component({
  selector: 'app-legal-entity',
  templateUrl: './legal-entity.component.html',
  styleUrls: ['./legal-entity.component.scss'],
})
export class LegalEntityComponent implements OnInit, OnDestroy {
  data: any;
  businessGroupDropdownSupscription: Subscription;
  selectedBusinessGroup: SelectedBusinessGroup | undefined;
  bgId:any;
	searchText: any;
	searchCount: number = 0;
	dataBackup: any;
  legalEdit:any;
	legalAdd:any;
	legalDelete:any;
  
  constructor(
    private router: Router,
    private businessGroupDropdownService: BusinessGroupDropdownService,
    private legalEntityService: LegalEntityService,
    private searchString: SearchStringPipePipe,
		private globalRoutes: GlobalRoutesService
  ) {
    this.businessGroupDropdownSupscription = this.businessGroupDropdownService
      .businessGroup()
      .subscribe((bg) => {
        if (bg) {
          this.selectedBusinessGroup = bg;
          this.getUserOrdID();
        }
      });
  }
  ngOnInit(): void {
    this.checkPermission();
  }
  ngOnDestroy(): void {
    this.businessGroupDropdownSupscription.unsubscribe();
  }
  fetchList() {
    if (this.selectedBusinessGroup) {
      this.legalEntityService
        .getLegalEntites(this.selectedBusinessGroup.bgId)
        .subscribe({
          next: (res) => {
            this.data = res;
          },
          error: () => {},
        });
    }
  }
  fetchListSuperUser() {
      this.legalEntityService
        .getLegalEntites(this.bgId)
        .subscribe({
          next: (res) => {
            this.data = res;
          },
          error: () => {},
        });
  }
  delete(id: string) {
    if(!this.bgId){
			this.bgId = this.selectedBusinessGroup?.bgId
		}
    if (this.selectedBusinessGroup && id) {
      this.legalEntityService
        .deleteLegalEntity(this.bgId, id)
        .subscribe({
          next: (res) => {
            this.getUserOrdID();
          },
          error: () => {},
        });
    }
  }
  addLegalEntity(){
    this.router.navigate(['/dashboard/settings/onboarding/legal-entity/add']);
  }
  getUserOrdID(){
    let bgOrdID:any = localStorage.getItem('selected_business_group');
    if(bgOrdID == null){
      this.bgId = 'intelliveer';
      this.fetchListSuperUser()
    }else{
      this.bgId = '';
      this.fetchList();
    }
  }

  search() {
		this.searchCount++;
		if (this.searchCount == 1) {
			this.dataBackup = this.data;
		}
		this.data = this.dataBackup;
		let dataFiltered = this.data.filter((x: any) => {
			return x._id.toLowerCase().includes(this.searchText.toLowerCase()) || x.name.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.firstName.toLowerCase().includes(this.searchText.toLowerCase())
				|| x.contactPerson.lastName.toLowerCase().includes(this.searchText.toLowerCase()) || x.contactPerson.phone.number.toLowerCase().includes(this.searchText.toLowerCase())
				|| x.createdAt.toString().toLowerCase().includes(this.searchText.toLowerCase()) ||
				(x.contactPerson.firstName.toLowerCase().concat(" ").concat(x.contactPerson.lastName.toLowerCase())).includes(this.searchText.toLowerCase())
				;
		});
		this.data = dataFiltered;
	}
  checkPermission(){
		let legalEntity = this.globalRoutes.getSettingsOnboardingRoutes();
		let getLegalEntity = this.searchString.transform('title',legalEntity,"Legal Entity");
		this.legalAdd = this.searchString.transform('title',getLegalEntity[0].child,'Add');
		this.legalEdit = this.searchString.transform('title',getLegalEntity[0].child,'Edit');
		this.legalDelete = this.searchString.transform('title',getLegalEntity[0].child,'Delete');
	}
}
