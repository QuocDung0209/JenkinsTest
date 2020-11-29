import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-greactive-form',
  templateUrl: './greactive-form.component.html',
  styleUrls: ['./greactive-form.component.scss']
})
export class GreactiveFormComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      username: "",
      password: "",
      rememberMe: false,
    });

    setTimeout(() => {
      this.signInForm.patchValue({
        username: 'KenjiNguyen'
      });
    }, 1000)
  }

  onSubmit() {
    console.log(this.signInForm);
  }

}
