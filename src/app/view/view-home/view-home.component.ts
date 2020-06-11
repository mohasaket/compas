import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  state = [
    { value: 12, lable: '#  Faves', },
    { value: 32, lable: 'VIEWS' },
    { value: 23, lable: 'MEMBERS' }
  ];
  items = [
    {
      image: '../../../assets/img/dokhtar.jpg',
      item: 'title',
      description: 'this is just for test '
    },
    {
      image: '../../../assets/img/dokhtar.jpg',
      item: 'title',
      description: 'this is just for test '
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
