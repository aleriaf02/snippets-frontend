import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Register } from 'src/app/core/authentication/register/register.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  response!: Observable<Register>;
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });
  constructor(private authService: AuthService, private formBuilder: FormBuilder) { 
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
          ]
        ],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
      },
      {
        validators: [this.controlValuesAreEqual('password', 'confirmPassword')]
      }
    );
  }
  submit(): void{
    //checks
    //errores
    this.register();
  }

  register(): void{
    this.response = this.authService.register(this.form.value);
  }


  private controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const valueOfControlA = formGroup.get(controlNameA)?.value;
    const valueOfControlB = formGroup.get(controlNameB)?.value;
      if (valueOfControlA===valueOfControlB){return null}
      else return { 
        valuesDoNotMatch: true } 
    }
  }
}
