import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1 {
    background: aqua
  }`]
})
export class AppComponent {

  // state: { login: string, pass: string } = {
  //   login: '',
  //   pass: ''
  // };

  // loginForm: { login: string, password: string } = {
  //   login: 'def log',
  //   password: 'def pass'
  // };

  forma: FormGroup;

  // password: FormControl = new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]);
  //
  // constructor() {
  //   this.forma = new FormGroup({
  //     login: new FormControl('', [Validators.required, Validators.maxLength(10)
  //       // ,(control) => {
  //       //   if (control.value.length < 5) {
  //       //     return {customError: true};
  //       //   }
  //       // }
  //       ] ),
  //     password: this.password
  //   });
  // }
  //
  //
  // // changeState(xxx: HTMLInputElement) {
  //
  // //   this.state = xxx.value;
  // // }
  // checkState(forma: FormGroup) {
  //   console.log(forma);
  // }

  constructor(private formBuilder: FormBuilder) {
    this.forma = formBuilder.group({
      login: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]]
    });
  }

  // https://regex101.com/   generaror regulars

}
