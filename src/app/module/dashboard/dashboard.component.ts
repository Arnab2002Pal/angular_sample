import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interface/User';
import { UserServiceService } from '../../services/user-service.service';
import { ColDef } from 'ag-grid-community';
import { UserDataComponent } from '../../component/user-data/user-data.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild(UserDataComponent) userModalRef!: UserDataComponent;

  users: User[] = [];
  searchValue: string = '';
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    dob: 0,
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zip: 0,
    country: '',
    workExperience: 0,
    id: '',
  };

  rowData: User[] = [];
  colDefs: ColDef[] = [
    { field: 'id', filter: true, floatingFilter: true, sortable: true },
    { field: 'firstName', filter: true, floatingFilter: true, sortable: true },
    { field: 'lastName', filter: true, floatingFilter: true, sortable: true },
    { field: 'email', filter: true, floatingFilter: true, sortable: true },
    { field: 'contactNo', filter: true, floatingFilter: true, sortable: true },
    { field: 'dob', filter: true, floatingFilter: true, sortable: true },
    {
      field: 'workExperience',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'addressLine1',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    {
      field: 'addressLine2',
      filter: true,
      floatingFilter: true,
      sortable: true,
    },
    { field: 'city', filter: true, floatingFilter: true, sortable: true },
    { field: 'zip', filter: true, floatingFilter: true, sortable: true },
    { field: 'country', filter: true, floatingFilter: true, sortable: true },
    { field: 'state', filter: true, floatingFilter: true, sortable: true },
  ];

  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchUsers();
  }

  ngAfterViewInit(): void {
    this.userModalRef.editComplete.subscribe(() => {
      this.fetchUsers();
    });
  }
  onSearch(text: string) {
    this.userService.setSearchText(text);
  }

  fetchUsers() {
    this.userService.getUser().subscribe(
      {
        next: (response: User[]) => {
          this.rowData = response;
        },
        error: (error:any) => {
          alert(error.message);
        }
      }
    );
  }

  add() {
    this.userModalRef.open();
  }

  rowClicked($event: any) {
    this.userService.singleUser($event.data.id).subscribe((response: User) => {
      this.userModalRef.open(response);
    });
  }

  logout(){
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    this.router.navigate(['login']);
  }
}
