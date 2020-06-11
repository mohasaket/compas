import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  @Output() close = new EventEmitter();
  constructor(private el: ElementRef) { }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.el.nativeElement.remove();

  }
  onClickClose() {
    this.close.emit();
  }
}
