import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenService: TokenService) { }
  public loginForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
    if (this.tokenService.getToken() != null) {
      this.loginForm.reset();
      this.router.navigateByUrl('/home');
    }
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required]]

    })
  }
  get username() {
    return this.loginForm.get('username')
  }

  get password() {
    return this.loginForm.get('password')
  }

  validationMessages = {
    'username': [
      { type: 'required', message: 'An username is mandatory' },
      { type: 'minlength', message: 'Must be at least 6 characters long' },
    ],
    'password': [
      { type: 'required', message: 'Password is mandatory' },
    ]

  }

  login() {
    if (this.loginForm.invalid) return
    const data = this.loginForm.value;

    this.userService.login(data).subscribe(resp => {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user', resp.user._id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: '<div style="font-family:Genshin">Signed in successfully</div>'
      })

      this.router.navigateByUrl("/home")
    }, error => {
      Swal.fire({
        icon: 'error',
        title: '<div style="font-family:Genshin">Wrong credentials</div>'
      })
    });
  }
}
