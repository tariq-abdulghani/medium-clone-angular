import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { map, Observable } from "rxjs";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";
import { AuthResponseInterface } from "../types/authResponse.interface";

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  public register(data: RegisterRequestInterface): Observable<CurrentUserInterface>{
    const url = 'https://fakestoreapi.com/users';
    return this.httpClient.post<AuthResponseInterface>(url, data).pipe(map((res)=> res.user));
  }
}