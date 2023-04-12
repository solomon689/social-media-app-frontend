import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', [Validators.required]],
      avatar: [''],
      cover: [''],
    });
  }

  ngOnInit(): void {
  }

  public isValidField(field: string): string {
    const validatedField = this.registerForm.get(field);

    return (!validatedField?.valid && validatedField?.touched)
    ? 'is-invalid': validatedField?.touched ? 'is-valid': '';
  }

  public onSubmit(): void {
    console.log(this.registerForm.value);
  }

}
