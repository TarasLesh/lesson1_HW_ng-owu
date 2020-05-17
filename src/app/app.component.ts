import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "./models/Todo";
import {FirstChildComponent} from "./first-child/first-child.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [`h1 {
    background: aqua
  }`]
})
export class AppComponent implements AfterViewInit {

  // state: { login: string, pass: string } = {
  //   login: '',
  //   pass: ''
  // };

  // loginForm: { login: string, password: string } = {
  //   login: 'def log',
  //   password: 'def pass'
  // };

  // forma: FormGroup;


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

  // constructor(private formBuilder: FormBuilder) {
  //   this.forma = formBuilder.group({
  //     login: ['', [Validators.required, Validators.maxLength(10)]],
  //     password: ['', [Validators.required, Validators.pattern('[a-zA-Z]{6,}')]]
  //   });
  // }

  // https://regex101.com/   generaror regulars

  // @ts-ignore

  @ViewChild('target', {static: false})
  target;

  @ViewChild(FirstChildComponent, {static: false})
  firstChild: FirstChildComponent;

  form: FormGroup;

  todos: Todo[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
      type: ['', Validators.required],
    });


  }

  save() {
    this.todos.push(this.form.value);
  }

  ngAfterViewInit(): void {

    console.log(this.target.nativeElement.innerText);

    console.log(this.firstChild);
    this.firstChild.hello();
  }


}


// <application android:usesCleartextTraffic="true" />
