import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Login } from 'src/app/core/authentication/login/login.model';
import { Refresh } from 'src/app/core/authentication/refresh/refresh.model';
import { Register } from 'src/app/core/authentication/register/register.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiURL + 'auth/';

  constructor(private http: HttpClient, private route: Router) {}

  logIn(loginForm: FormGroup): Observable<Login> {
    return this.http.post<Login>(this.url + 'login/', loginForm);
  }

  register(registerForm: FormGroup): Observable<Register> {
    return this.http.post<Register>(this.url + 'register/', registerForm);
  }

  refresh(): Observable<Refresh> {
    return this.http.get<Refresh>(this.url + 'login/refresh/');
  }

  public saveToken(token: string): void {
    localStorage.removeItem('access_token');
    localStorage.setItem('access_token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  public saveRefreshToken(token: string): void {
    localStorage.removeItem('refresh_token');
    localStorage.setItem('refresh_token', token);
  }

  public getRefreshToken(): string | null {
    return localStorage.getItem('refresh_token');
  }

  refreshToken(token: string) {
    console.log(this.url);
    return this.http.post(
      this.url + 'login/refresh/',
      {
        refresh: token,
      },
      httpOptions
    );
  }

  signOut(): void {
    localStorage.clear();
    this.route.navigate(['/']).then();
  }
}
