import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  private validUsername = 'admin';
  private validPassword = 'admin';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if(this.loginForm.invalid) return;
    const {username, password } = this.loginForm.value;

    if(username === this.validUsername && password === this.validPassword) {
      this.router.navigate(['/dashboard']);
    }else{
      this.errorMessage = 'Invalid username or password. Kindly enter correct credentials';
    }
  }
}
