import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private tokenService: TokenService) { }
  public registerForm: FormGroup;
  ngOnInit(): void {
    this.createForm();
    if (this.tokenService.getToken() != null) {
      this.registerForm.reset();
      this.router.navigateByUrl('/home');
    }
  }


  createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]

    })
  }
  get username() {
    return this.registerForm.get('username')
  }
  get email() {
    return this.registerForm.get('email')
  }
  get password() {
    return this.registerForm.get('password')
  }

  validationMessages = {
    'username': [
      { type: 'required', message: 'An username is mandatory' },
      { type: 'minlength', message: 'Must be at least 6 characters long' },
    ],
    'email': [
      { type: 'required', message: 'Email is mandatory' },
      { type: 'mail', message: 'Invalid format' }
    ],
    'password': [
      { type: 'required', message: 'Password is mandatory' },
    ]

  }
  register() {
    if (this.registerForm.invalid) return
    const data = this.registerForm.value;


    this.userService.register(data).subscribe(resp => {
      Swal.fire({
        icon: 'success',
        title: '<div style="font-family:Genshin">Succesfully registered</div>'
      }).then(() => {
        this.router.navigateByUrl("/login");
      })
    }, error => {
      Swal.fire({
        icon: 'error',
        title: '<div style="font-family:Genshin">An error has ocurred</div>'
      })
    })
  }
}
