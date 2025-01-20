import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;
  errorMessage: string | undefined;

  constructor(private formBuilder: FormBuilder, private router: Router, private toastController: ToastController) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      firstLastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      secondLastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    })
  } 
  ngOnInit() {
  }

  onSubmitRegister() {
    if (this.registerForm.valid) {
      this.router.navigate(['/login']);
    } else{
      this.errorMessage = 'Por favor, complete todos los campos';
    }
  }

  validatePassword() {
    if (this.registerForm.get('password')?.value !== this.registerForm.get('confirmPassword')?.value) {
      this.errorMessage = 'Las contraseñas no coinciden';
    } else {
      this.errorMessage = '';
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
