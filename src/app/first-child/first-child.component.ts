import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit {

  constructor(private dataService: DataService) {
    dataService.getState().subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  doNewState() {
    this.dataService.setState('hello from first component');
  }

  hello(){
    console.log('hello');
  }
}
