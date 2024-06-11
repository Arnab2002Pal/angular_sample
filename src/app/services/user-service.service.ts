import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, mergeMap, switchMap } from 'rxjs';
import { User, UserWithId, createUser } from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl = 'https://6661749e63e6a0189fe9f1b2.mockapi.io/Users?';
  private searchSubject = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  addUser(user: createUser): Observable<createUser> {
    return this.http.post<createUser>(
      `https://6661749e63e6a0189fe9f1b2.mockapi.io/Users`,
      user
    );
  }

  fetchUsers(searchText: string = ''): Observable<User[]> {
    return this.http.get<User[]>(
      this.apiUrl +
        `page=1&limit=10&search=${searchText}&sortBy=firstName&order=desc`
    );
  }

  singleUser(id: number): Observable<User> {
    return this.http.get<User>(
      `https://6661749e63e6a0189fe9f1b2.mockapi.io/Users/${id}`
    );
  }

  editUser(id: number, data: User): Observable<any> {
    return this.http.put(
      `https://6661749e63e6a0189fe9f1b2.mockapi.io/Users/${id}`,
      data
    );
  }

  deleteUser(id: number): Observable<any> {
    return this.http
      .delete(`https://6661749e63e6a0189fe9f1b2.mockapi.io/Users/${id}`);
  }

  setSearchText(searchText: string) {
    this.searchSubject.next(searchText);
  }

  getUser(): Observable<User[]> {
    return this.searchSubject
      .asObservable()
      .pipe(switchMap((searchText) => this.fetchUsers(searchText)));
  }
}
