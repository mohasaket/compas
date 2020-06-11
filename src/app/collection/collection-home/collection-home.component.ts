import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data = [
    { namepro: 'moha', age: 29, job: 'developer', employee: false },
    { namepro: 'moreteza', age: 26, job: 'cto', employee: true },
    { namepro: 'moheb', age: 27, job: 'chefironCar', employee: true }];
  headers = [
    {key: 'namepro', lable: 'Name' },
    { key: 'age', lable: 'Age' },
    { key: 'job', lable: 'Job' },
    { key: 'employee', lable: 'Employee' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
