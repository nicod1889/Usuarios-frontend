import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  private baseURL = "http://localhost:8080/api/usuarios"

  constructor(private httpClient: HttpClient) { }

  public getUsersList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
}
