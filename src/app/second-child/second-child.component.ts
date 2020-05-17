import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit {

  constructor(private dataService: DataService) {
    this.dataService.getState().subscribe(value => console.log(value));
  }

  ngOnInit(): void {
  }

  changeState() {
    this.dataService.setState('second hello');
  }
}
