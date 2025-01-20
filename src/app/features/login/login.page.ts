import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | undefined;
  email = 'carlos123@gmail.com';
  password = 'carlos123';

  constructor(private formBuilder: FormBuilder, private router: Router, private toastController: ToastController) { 
   this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }

  ngOnInit() {
    this.loginForm.updateValueAndValidity();
  }

  onSubmit(){
    if ( this.email == 'carlos123@gmail.com' && this.password == 'carlos123') {
      console.log(this.loginForm.value);
      this.router.navigate(['dashboard']);
    } else {
        this.errorMessage = 'Por favor, ingrese un correo electrónico y una contraseña válidos.';
        this.presentToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Las credenciales de acceso son incorrectas.',
      duration: 2000,
      position : 'bottom',
      color: 'warning',
    });
    await toast.present();
  }

}
