import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  access_token: string = 'access_token';
  refresh_token: string = 'refresh_token';
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private toastService: HotToastService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  submit(): void {
    this.authService.logIn(this.form.value).subscribe((e) => {
      this.toastService.success('Welcome!');
      this.saveToken(e.access);
      this.saveRefreshToken(e.refresh);
      this.redirectToHome();
    });
  }

  logOut(): void {
    this.removeRefreshToken();
    this.removeToken();
    this.redirectToHome();
    this.toastService.success('Logged out!');
  }

  saveToken(token: string): void {
    localStorage.setItem(this.access_token, token);
  }

  saveRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.refresh_token, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(this.access_token);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.refresh_token);
  }

  private redirectToHome(): void {
    this.router.navigate(['/search']).then();
  }
}
