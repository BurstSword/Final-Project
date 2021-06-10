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
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10), Validators.pattern("\S+")]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(12), Validators.pattern("\S+")]],
      password: ['', [Validators.required, Validators.pattern("\S+")]]

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
      { type: 'maxlength', message: '10 characters maximum' },
      { type: 'pattern', message: 'Whitespaces are not allowed' },
    ],
    'email': [
      { type: 'required', message: 'Email is mandatory' },
      { type: 'mail', message: 'Invalid format' },
      { type: 'maxlength', message: '12 characters maximum' },
      { type: 'pattern', message: 'Whitespaces are not allowed' },
    ],
    'password': [
      { type: 'required', message: 'Password is mandatory' },
      { type: 'pattern', message: 'Whitespaces are not allowed' },
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
