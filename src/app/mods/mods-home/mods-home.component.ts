import { Component, OnInit } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
modalIsOpen= false;
items=[{title:'how to do',content:'do what you want'},
{title:'dont you ever go',content:'fly fly ever now'},
{title:' c c ',content:'what im seaid'}
];
  constructor() { }

  ngOnInit(): void {
  }
onClick(){
  this.modalIsOpen = !this.modalIsOpen;
}
}
